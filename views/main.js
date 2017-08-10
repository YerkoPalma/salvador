var html = require('choo/html')
var Header = require('../components/header')
var Navlink = require('../components/navlink')

var header = Header()
var nextlink = Navlink('right')
var prevlink = Navlink('left')

module.exports = function (state, emit) {
  return html`
  <div class="container">
    ${header.render(state, emit)}
    <section class="main">
      <div class="links">
        ${prevlink.render(state, emit)}
        ${nextlink.render(state, emit)}
      </div>
    </section>
  </div>
  `
}
