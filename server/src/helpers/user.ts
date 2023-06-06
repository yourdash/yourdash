import { promises as fs } from "fs"
import path from "path"

import sharp from "sharp"

import { hash } from "./encryption.js"
import { IYourDashSession } from "../../../shared/core/session.js"
import YourDashSession, { getSessionsForUser } from "./session.js"
import chalk from "chalk"

export enum YourDashUserPermissions {
  Administrator, CreateFiles, DeleteFiles,
}

export interface IYourDashUser {
  username: string;
  fullName: { first: string; last: string };
  permissions: YourDashUserPermissions[];
  contacts: string[]; // an array of user's usernames
}

class YourDashUser {
  username: string
  user: IYourDashUser

  constructor( username: string ) {
    this.username = username

    if ( !this.exists() ) {
      return
    }

    return this
  }

  setPassword( password: string ): this {
    try {
      hash( password ).then( async result => {
        await fs.writeFile( path.resolve( this.getPath(), "./password.txt" ), result )
      } )
    } catch ( _err ) {
      console.error( `unable to set password for user: ${ this.username }` )
    }

    return this
  }

  verifyUserConfig(): this {
    // checks all properties of this.user to make sure that they match IYourDashUser
    if ( !this.user ) {
      // @ts-ignore
      this.user = {}
    }
    if ( !this.user.fullName ) {
      this.user.fullName = { first: "New", last: "User" }
    }
    if ( !this.user.permissions ) {
      this.user.permissions = []
    }
    if ( !this.user.contacts ) {
      this.user.contacts = []
    }

    return this
  }

  async generateAvatars(): Promise<this> {
    sharp( ( await fs.readFile( path.resolve( this.getPath(), "default_avatar.avif" ) ) ) )
      .resize( 32, 32 )
      .toFile( path.resolve(
        this.getPath(),
        "micro_avatar.avif"
      ) ).catch( err => console.error( err ) )
    return this
  }

  getPath(): string {
    return path.resolve( process.cwd(), `./fs/users/${ this.username }/` )
  }

  getAppDataPath(): string {
    return path.resolve( this.getPath(), "./app_data/" )
  }

  getName(): { first: string; last: string } {
    return this.user.fullName
  }

  async exists(): Promise<boolean> {
    return new Promise<boolean>( resolve => {
      fs.access( this.getPath() )
        .then( () => {
          resolve( true )
        } )
        .catch( () => {
          resolve( false )
        } )
    } )
  }

  async write() {
    if ( !( await this.exists() ) ) {
      await fs.mkdir( this.getPath(), { recursive: true } )
      await fs.cp(
        path.resolve( process.cwd(), "./src/assets/default_avatar.avif" ),
        path.resolve( this.getPath(), "avatar.avif" )
      )
      hash( "password" ).then( async response => {
        await fs.writeFile( path.resolve( this.getPath(), "./password.txt" ), response )
      } )
      await fs.writeFile( path.resolve( this.getPath(), "./quick-shortcuts.json" ), JSON.stringify( [] ) )
      await fs.mkdir( this.getAppDataPath() )
      await fs.mkdir( path.resolve( this.getPath(), "./fs/" ) )
    }

    try {
      await fs.writeFile( path.join( this.getPath(), "user.json" ), JSON.stringify( this.user ) )
    } catch ( err ) {
      console.error( "Error writing user to disk!", err )
    }
  }

  async read(): Promise<this> {
    try {
      this.user = await JSON.parse( (
        await fs.readFile( path.join( this.getPath(), "user.json" ) )
      ).toString() || "{}" )
    } catch ( _err ) {
      console.error( `Error reading user "${ this.username }" from disk!` )
    }
    return this
  }

  hasPermission( perm: YourDashUserPermissions ): boolean {
    return this.user.permissions.indexOf( perm ) !== -1
  }

  addPermission( perm: YourDashUserPermissions ): this {
    this.user.permissions.push( perm )

    return this
  }

  setPermissions( permissions: YourDashUserPermissions[] ): this {
    this.user.permissions = permissions

    return this
  }

  setName( name: { first: string; last: string } ): this {
    this.user.fullName = name
    return this
  }

  async getSessions(): Promise<IYourDashSession<any>[]> {
    return JSON.parse( ( await fs.readFile( path.resolve( this.getPath(), "sessions.json" ) ) ).toString() )
  }

  getSession( sessionId: number ): YourDashSession<any> | undefined {
    try {
      // return a YourDashSession which has the sessionId as its id, find the correct session and use it as an input
      return new YourDashSession(
        this.username,
        getSessionsForUser( this.username )[getSessionsForUser( this.username ).findIndex( val => val.id === sessionId )]
      )
    } catch ( _err ) {
      console.log( `[${ chalk.yellow( "WARN" ) }]: unable to find session: ${ sessionId }` )
      return undefined
    }
  }
}

export default class YourDashUnreadUser {
  username: string

  constructor( username: string ) {
    this.username = username
  }

  getPath(): string {
    return path.resolve( process.cwd(), `./fs/users/${ this.username }/` )
  }

  getAppDataPath(): string {
    return path.resolve( this.getPath(), "./app_data/" )
  }

  async exists(): Promise<boolean> {
    return new Promise<boolean>( resolve => {
      fs.access( this.getPath() )
        .then( () => {
          resolve( true )
        } )
        .catch( () => {
          resolve( false )
        } )
    } )
  }

  async create( password: string, name: { first: string, last: string }, permissions: YourDashUserPermissions[] ) {
    return new YourDashUser( this.username ).verifyUserConfig().setPassword( password ).setName( name ).setPermissions( permissions ).write()
  }

  async read() {
    return await new YourDashUser( this.username ).read()
  }
}