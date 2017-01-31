const Server = require('./server.js');
const port = (process.env.PORT || 4000);
const app = Server.app();
let bodyParser = require('body-parser');

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.config.js')
const compiler = webpack(config)

app.use(webpackHotMiddleware(compiler))
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //admite body request in json format
app.listen(port);

console.log(`Listening at http://localhost:${port}`)