var html = require('choo/html')
var Header = require('../components/header')
var Navlink = require('../components/navlink')
var Timeline = require('../components/timeline')

var header = Header()
var nextlink = Navlink('right')
var prevlink = Navlink('left')
var timeline = Timeline()

module.exports = function (state, emit) {
  return html`
  <div class="container">
    ${header.render(state, emit)}
    <section class="main">
      ${timeline.render(state, emit)}
      <div class="links">
        ${prevlink.render(state, emit)}
        ${nextlink.render(state, emit)}
      </div>
    </section>
  </div>
  `
}
