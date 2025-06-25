# YourDash Instance Backend

Request Manager
---
Handles incoming web requests
Accepts REST and TRPC

Resource Manager
---
Handles the reading, editing, creating, deleting & sharing of resources between teams, users and globally

Event Manager
---
allows the firing of events, triggering callback listeners when one occurs
all events are logged in a database, when a callback is successful, it is logged to the database
if a callback fails or a service is offline when an event occurs, it will be saved and the event will be replayed to these services upon the service's restart

User Manager
---
allows the creation, renaming, deleting and updating of users

Team Manager
---
allows the creation, renaming, deleting and updating of teams

Permission Manager
---
ensures that only the correct users and teams are able to access & update resources

Image Manager
---
manages the resizing, format changing and compressing of images, also manages EXIF data

Authorization Manager
---
Manages user login and passwords

Filesystem Manager
---
manages the interface between the filesystem and the yourdash Instance
allows services to recieve updates of when a file has been changed and what about that file has changed
allows users to only access files which are in their respective areas
