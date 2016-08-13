const choo = require('choo')
const sf = require('sheetify')
const mainView = require('./views/main')

sf('./css/style.css', { global: true })

const app = choo()

app.model(require('./models/event'))

app.router(route => [
  route('/', mainView)
])

const tree = app.start()
document.body.appendChild(tree)
