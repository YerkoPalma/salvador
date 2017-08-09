var log = require('choo-log')
var choo = require('choo')
var css = require('sheetify')
var mainView = require('./views/main')

css('./assets/style.css', { global: true })

var app = choo()
app.use(log())

app.route('/', mainView)
var tree = app.start()
document.body.appendChild(tree)
