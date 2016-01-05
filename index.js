//
//                      Project Index
//

// =======================================================
//  Require Diet
// =======================================================
    
    var server = require('diet')
    

// =======================================================
//  Create Server
// =======================================================

    var app = module.app = server()
        app.config = require('./config')(app)
        app.listen(app.config.host)


// =======================================================
//  View Engine
// =======================================================

    var ect = require('ect')({ root  : app.path+'/views/html/', watch: true, ext: '.html' })
    app.view('html', ect.render)

    
// =======================================================
//  Static Files
// ======================================================= 

    var static  = require('diet-static')({ path: app.path+'/views/' })
    app.view('file', static)


// =======================================================
//  Data Model
// ======================================================= 
    
    var data = {
        title: 'Hello World',
        description: 'A simple example for using Vue with Diet',
        counter: 0
    }


// =======================================================
//  Routes
// =======================================================
    
    app.get('/', function($){
        $.data = data;
        $.end()
    })
    
   
// =======================================================
//  Socket.io
// ======================================================= 
    
    var io = require('socket.io')(app.server) 
    
    io.on('connection', function(socket){
        console.log(' ... A user connected');
        
        socket.on('save', function(key, value){
            // Log the update
            console.log(' ... save', key, 'to', value)
            
            // Save the value
            data[key] = value
            
            // Broadcast change to all user agents
            socket.broadcast.emit('update', key, value);
        })
    })
    
    // Every second
    setInterval(function(){
        // Updates the counter by 1
        data.counter++
        
        // Emit to listeners
        io.emit('update', 'counter', data.counter);
    }, 1000)
    
    
    
    
    
    