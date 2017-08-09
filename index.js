var log = require('choo-log')
var choo = require('choo')
var css = require('sheetify')
var mainView = require('./views/main')

css('./assets/style.css', { global: true })

var app = choo()
app.use(log())
app.use(function (state, emitter) {
  var allYears = require('./data.json')

  state.title = 'Salvador Aarón Palma Navea'
  state.subtitle = 'Su primer añito'
  state.current = 1
  state.availaibleYears = 2
  state.events = allYears[0]
  
})
app.route('/', mainView)
var tree = app.start()
document.body.appendChild(tree)
