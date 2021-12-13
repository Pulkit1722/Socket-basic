const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {origin:"*"}});
app.set("view engine", "ejs");
io.on("connection", (socket) => {
 console.log("User Connected: "+socket.id);

 socket.on("message",(data)=>{
     console.log(data);
     socket.broadcast.emit("message", data);
 })
});
app.get('/',(req,res)=>{
    res.render('home')
})
httpServer.listen(3001,()=>{
    console.log("server is running")
});