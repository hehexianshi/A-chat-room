//var io = require('/usr/local/node/npm/node_modules/socket.io').listen(8001);
var io = require('socket.io').listen(8001);
io.sockets.on('connection', function(socket){
    var get,
        nickname;
    socket.on('nickname', function(name){
        socket.set('nickname', name, function(){
            io.sockets.emit('ready');  
        });  
    });
    socket.on('send', function(data){
        socket.get('nickname',function(err, name){
            get = data.my;
            socket.broadcast.emit('user connected');
            io.sockets.emit('all',{data : get, name : name.name});
        });
    });
   
});
io.sockets.on('disconnect', function(socket){
    io.sockets.emit('all', {data : 'user by'});      
        
});
