var choo = require('choo')
var css = require('sheetify')
var mainView = require('./views/main')

css('./assets/style.css', { global: true })

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-log')())
}
app.use(function (state, emitter) {
  var allYears = require('./data.json')

  state.title = 'Salvador Aarón Palma Navea'
  state.subtitle = 'Su primer añito'
  state.current = 1
  state.availaibleYears = 3
  state._events = state.events
  state.events = allYears[0]
  emitter.on('setYear', function (year) {
    state.current = year
    emitter.emit('log:info', 'Going to ' + year)
    emitter.emit(state._events.PUSHSTATE, '/?year=' + year)
  })
})

app.route('/', mainView)
var tree = app.start()
document.body.appendChild(tree)
