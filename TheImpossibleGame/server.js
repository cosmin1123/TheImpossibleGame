var express  = require('express'),
    app      = express(),
    server   = require('http').createServer(app),
    io       = require('socket.io').listen(server),
    port     = process.argv[2] || 3000;

// settings

// define a custom res.message() method
// which stores messages in the session
app.response.message = function(msg) {
  // reference `req.session` via the `this.req` reference
  var sess = this.req.session;
  // simply add the msg to an array for later
  sess.messages = sess.messages || [];
  sess.messages.push(msg);
  return this;
};

// log
app.use(express.logger('dev'));

// serve static files
app.use(express.static(__dirname + '/public'));

// session support
app.use(express.cookieParser('some secret here'));
app.use(express.session());

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT in forms etc)
app.use(express.methodOverride());


var connected_players = [];

// get list with all connected players
app.get('/users', function(req, res, next) {
  res.send(connected_players);
});

// when he loads the page, make a request here to see if he's already auth
app.get('/get_user', function(req, res, next) {
  res.send({ name: req.session.name });
});

// when he closes the page, call this url ~ a kind of logout
app.get('/remove_user', function(request, response, next) {
  var pos, user;
  
  user = res.session.name;
  
  if (user) {
    for(var i = 0; i < connected_players.length; i++) {
      if (connected_players[i] === res.session.name) {
        pos = i;
      	break;
      }
    }
    connected_players = connected_players.splice(1, pos);
  }
  
  res.send('ok');
});

// request client name and after that call this url
// $.ajax( .. url: '/new_user/alex' )
app.get('/new_user/:name', function(req, res, next) {
  if (connected_players.indexOf(req.params.name) !== -1) {
    res.send({ error: "user already exists" });
  } else {
    req.session.name = req.params.name;
    connected_players.push(req.params.name);
    io.sockets.emit('new_user', req.params.name);
    res.send({ ok: 1 });
  }
});

// expose the "messages" local variable when views are rendered
app.use(function(req, res, next) {
  var msgs = req.session.messages || [];

  // expose "messages" local variable
  res.locals.messages = msgs;

  // expose "hasMessages"
  res.locals.hasMessages = !! msgs.length;

  /* This is equivalent:
   res.locals({
     messages: msgs,
     hasMessages: !! msgs.length
   });
  */

  // empty or "flush" the messages so they
  // don't build up
  req.session.messages = [];
  next();
});

// assume "not found" in the error msgs
// is a 404. this is somewhat silly, but
// valid, you can do whatever you like, set
// properties, use instanceof etc.
app.use(function(err, req, res, next){
  // treat as 404
  if (~err.message.indexOf('not found')) {
    return next();
  }

  // TODO: change this
  console.error(err.stack);

  // error page
  res.status(500).send('500 internal server error');
});

// assume 404 since no middleware responded
app.use(function(req, res, next){
  res.status(404).send('404 not found');
});

var id = 0;

io.configure(function(){
  io.enable('browser client etag');
  io.set('log level', 1);
 });

io.sockets.on('connection', function (socket) {
 socket.on('XY', function (coords) {
   socket.broadcast.emit('XY', coords);
  });
});

if (!module.parent) {
  server.listen(port);
  console.log('listening on port ' + port);
}
