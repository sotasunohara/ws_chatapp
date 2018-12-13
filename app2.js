const WebSocket=require('ws').Server
    , http=require('http');

const server=http.createServer(function(request,response){
    response.writeHead(200)
    response.end()
})

const wss=new WebSocket({server:server})

const connections=[]

//接続時
wss.on('connection',function(ws){
    ws.on('message',function(message){
        ws.send()
    })
})