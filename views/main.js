var html = require('choo/html')
var Header = require('../components/header')

var header = Header()

module.exports = function (state, emit) {
  console.log(state)
  return html`
  <div class="container">
    ${header.render(state.title, state.subtitle)}
    <section class="main">
      <div class="links">
      </div>
    </section>
  </div>
  `
}
