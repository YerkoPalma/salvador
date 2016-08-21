const choo = require('choo')
const sf = require('sheetify')
const mainView = require('./views/main')

sf('./assets/css/style.css', { global: true })

const app = choo()

if (process.env.NODE_ENV !== 'production') {
  const log = require('choo-log')
  app.use(log())
}

app.model(require('./models/events'))

app.router(route => [
  route('/:year', mainView)
])

const tree = app.start({ hash: true })
document.body.appendChild(tree)
