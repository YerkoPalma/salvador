const choo = require('choo')
const sf = require('sheetify')
const mainView = require('./views/main')

sf('./assets/css/style.css', { global: true })

const app = choo()

app.model(require('./models/events'))

app.router(route => [
  route('/', mainView)
])

const tree = app.start({ hash: true })
document.body.appendChild(tree)
