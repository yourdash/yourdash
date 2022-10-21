# YourDash Server Filesystem layout

## `FS_ORIGIN`

### Portable / Dev modes
`FS_ORIGIN = ./fs/`

### Production
`FS_ORIGIN = /var/YourDash/`

## FileSystem layout

`
FS_ORIGIN
  yourdash.config.json
  config/
    test@ewsgit.github.io/
      [extension config files]
  data/
    users/
      [user name]/
        settings.json
        files/
          [user files root]
        temp/
          [temporary files]
    groups/
      [group name]/
        settings.json
        files/
          [group files root]
        temp/
          [temporary files]
`