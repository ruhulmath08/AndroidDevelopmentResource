# Project Name: Odduu Client Server (vdi_client_server)

Project Type : Back-end

Project Developed By MD Rakin Afser



Project run cmd: ./node_modules/.bin/gulp backend-watch [In Root Directory]

Project Entry Point : rootDir/src/index.js

- Port -1 - Socket Server - 8090
- Port -2 - Socket Server - 8091
- Port -3 - File Server - 8092


File Server Start : 
- http-server -p 8092 [in rootDir/FileServer Directory] - 
FileServer Directory located inside vdi_client_server

# Project Run Error :

```
this.wrap = new raw.SocketWrap 
Solution : Change the user to root
```


```
Error: listen EADDRINUSE :::8090
Solution: Terminate the port and run the project again. 
```
Terminating Process :
Find process id - netstat -nap | grep 8090
Kill Process : kill <pid>
