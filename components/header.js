var Nanocomponent = require('nanocomponent')
var html = require('choo/html')

function Header () {
  if (!(this instanceof Header)) return new Header()
  this.title = ''
  this.subtitle = ''
  Nanocomponent.call(this)
}
Header.prototype = Object.create(Nanocomponent.prototype)

Header.prototype.createElement = function (state, emit) {
  this.title = state.title
  this.subtitle = state.subtitle
  return html`
    <header class="clearfix">
      <h2>${this.title.trim()} <span>${this.subtitle.trim()}</span></h2>
    </header>
  `
}

Header.prototype.update = function (state, emit) {
  return (state.title && state.subtitle) && (state.title !== this.title || state.subtitle !== this.subtitle)
}

module.exports = Header
