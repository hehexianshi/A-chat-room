//var io = require('/usr/local/node/npm/node_modules/socket.io').listen(8001);
var io = require('socket.io').listen(8001);
io.sockets.on('connection', function(socket){
    var get;
    socket.on('send', function(data){
        get = data.my;
        socket.broadcast.emit('user connected');
        io.sockets.emit('all',{data : get});
    });
   
});
io.sockets.on('disconnect', function(socket){
    io.sockets.emit('all', {data : 'user by'});      
        
});
