var html = require('choo/html')
var Header = require('../components/header')

var header = Header()

module.exports = function (state, emit) {
  return html`
  <div class="container">
    ${header.render('Salvador Aarón Palma Navea', 'Su primer añito')}
    <section class="main">
      <div class="links">
      </div>
    </section>
  </div>
  `
}
