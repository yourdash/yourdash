/*
 * Copyright (c) 2023 YourDash contributors.
 * YourDash is licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { useEffect, useState } from "react";
import { Button, Card, IconButton, TextInput } from "../../ui/index";
import { useNavigate } from "react-router-dom";
import { YourDashIcon } from "../../ui/components/icon/iconDictionary";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [failure, setFailure] = useState( false );
  const [instanceUrl, setInstanceUrl] = useState( "http://example.com" );
  
  useEffect( () => {
    if (
      localStorage.getItem( "current_server" ) &&
      localStorage.getItem( "current_server" ) !== ""
    ) {
      navigate( "/login/server" );
    } else if ( window.location.hostname === "localhost" ) {
      localStorage.setItem( "current_server", "http://localhost:3560" );
    }
  }, [] );
  
  return (
    <main className={"flex flex-col items-center justify-center h-full w-full"}>
      <h1 className={"text-3xl text-container-fg pb-3"}>
        Enter your instance to continue
      </h1>
      <Card className={"flex flex-col gap-2"}>
        <TextInput
          label={"Instance URL"}
          onChange={value => {
            if ( value.indexOf( ":" ) === -1 ) {
              setInstanceUrl( value );
            } else {
              setInstanceUrl( `${ value }:3560` );
            }
          }}
          mustMatchRegex={
            /^(?:https?:\/\/)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?::\d+)?|localhost(?::\d+)?|(?!.*\.$)[\w.-]+\.[a-z]{2,})(?::\d+)?$/
          }
          placeholder={"https://example.com"}
        />
        <Button
          className={"w-full pt-2 pb-2 pl-4 pr-4 hover:bg-theme-600 active:bg-theme-500 bg-theme-700 " +
                      "transition-colors select-none cursor-pointer"}
          onClick={() => {
            fetch( `${ instanceUrl }/test`, {
              mode: "cors",
              headers: {
                "Access-Control-Allow-Origin": "*"
              }
            } ).then( resp => resp.json() ).then( resp => {
              if ( resp.status === 1 && resp.type === "yourdash" ) {
                localStorage.setItem( "current_server", instanceUrl );
                navigate( "/login/server" );
              }
            } );
          }}
        >
          Continue
        </Button>
      </Card>
      <header
        className={"absolute top-0 left-0 w-full h-16 flex items-center justify-center gap-2"}
      >
        <IconButton icon={YourDashIcon.ChevronLeft} className={"mr-auto ml-3.5"}/>
      </header>
      <footer
        className={"absolute bottom-0 left-0 w-full h-16 flex items-center gap-2 pl-3 bg-container-bg"}
      >
        <img
          src={"/assets/productLogos/yourdash.svg"}
          className={"h-full pt-3 pb-3"}
          alt={""}
        />
        <h3 className={"font-bold text-3xl"}>{"YourDash"}</h3>
        <Button
          className={"ml-auto"}
          onClick={() => {
            navigate( "/" );
          }}
        >
          {"Home"}
        </Button>
        <Button
          className={"mr-2"}
          onClick={() => {
            navigate( "/docs" );
          }}
        >
          {"Docs"}
        </Button>
      </footer>
    </main>
  );
};

export default LoginPage;