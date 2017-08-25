var choo = require('choo')
var css = require('sheetify')
var mainView = require('./views/main')

css('./style.css', { global: true })

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-log')({ timing: false }))
  app.use(require('choo-service-worker/clear')())
} else {
  app.use(require('choo-service-worker')())
}
app.use(function (state, emitter) {
  var allYears = require('./data.json')

  state.title = 'Salvador Aarón Palma Navea'
  state.subtitle = 'Su primer añito'
  state.current = 1
  state.availaibleYears = 2
  state._events = allYears[0]
  emitter.on('setYear', function (year) {
    var numeral = 'primer'
    numeral = year === 1
              ? 'primer' : year === 2
              ? 'segundo' : 'tercer'
    state.current = year
    state.subtitle = 'Su ' + numeral + ' añito'
    state._events = allYears[year - 1]
    emitter.emit('log:info', 'Going to ' + year)
    emitter.emit(state.events.PUSHSTATE, '/?year=' + year)
  })
})

app.route('/', mainView)
var tree = app.start()
document.body.appendChild(tree)
