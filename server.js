var webpack = require('webpack')
var config = require('./webpack.config')

var app = new (require('express'))()
app.set('port', process.env.PORT || 3000)

var compiler = webpack(config)

if (process.env.NODE_ENV !== 'prod') {
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

var server = app.listen(app.get('port'), function(error) {
  if (error) {
    console.error(error)
  } else {
    var port = server.address().port
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
