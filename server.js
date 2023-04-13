let express = require('express')
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
const ejs = require('ejs');
app.use(express.static('public')); //specify location of static assests
app.set('views', __dirname + '/views'); //specify location of templates
app.set('view engine', 'ejs'); //specify templating library

app.use(require('./controllers/auth'));
app.use(require('./controllers/index'));

const port = process.env.PORT || 3000;
app.set('port', port); //let heroku pick the port if needed

let socketapi =require('./controllers/socketConnections');
socketapi.io.attach(server);//attach sockets to the server

//start the server
server.listen(port, function() {
  console.log('Server started at http://localhost:'+port+'.')
});
