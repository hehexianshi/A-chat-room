var io = require('/usr/local/node/npm/node_modules/socket.io').listen(8001);
//var io = require('socket.io').listen(8001);
io.sockets.on('connection', function(socket){

    socket.broadcast.emit('connected', {data : 'new user insert', name : '管理员'});
    var get,
        nickname;
    socket.on('nickname', function(name){
        socket.set('nickname', name, function(){
            //io.sockets.emit('ready');  
        });  
    });
    socket.on('send', function(data){
        socket.get('nickname',function(err, name){
            get = data.my;
            io.sockets.emit('all',{data : get, name : name.name});
        });
    });
    socket.on('disconnect', function(){
        socket.get('nickname', function(err, name){
            
            io.sockets.emit('disconnection', {data : name.name});
        });
    });
   
});
