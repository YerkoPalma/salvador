var Nanocomponent = require('nanocomponent')
var html = require('bel')

function Header () {
  if (!(this instanceof Header)) return new Header()
  this.title = ''
  this.subtitle = ''
  Nanocomponent.call(this)
}
Header.prototype = Object.create(Nanocomponent.prototype)

Header.prototype.createElement = function (title, subtitle) {
  this.title = title
  this.subtitle = subtitle
  return html`
    <header class="clearfix">
      <h2>${title.trim()} <span>${subtitle.trim()}</span></h2>
    </header>
  `
}

Header.prototype.update = function (title, subtitle) {
  return (title && subtitle) && (title !== this.title || subtitle !== this.subtitle)
}

module.exports = Header
