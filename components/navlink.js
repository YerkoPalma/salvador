var Nanocomponent = require('nanocomponent')
var html = require('bel')

function Navlink (opt) {
  if (!(this instanceof Navlink)) return new Navlink(opt)
  if (typeof opt === 'string') this.direction = opt
  if (typeof opt === 'object') this.direction = opt.direction
  this.show = null
  this.current = null
  this.availaibleYears = null
  this._emit = null

  this.navigate = this.navigate.bind(this)

  Nanocomponent.call(this)
}
Navlink.prototype = Object.create(Nanocomponent.prototype)

Navlink.prototype.navigate = function (e) {
  e.preventDefault()
  this._emit('setYear', this.direction === 'left' ? this.current - 1 : this.current + 1)
}

Navlink.prototype.createElement = function (state, emit) {
  this._emit = emit
  this.current = state.current
  this.availaibleYears = state.availaibleYears
  this.show = this.direction === 'left'
              ? state.current > 1
              : state.current < state.availaibleYears

  return html`
    <a class="nav-link ${this.direction} ${!this.show ? 'dn' : ''}" href="#" onclick=${this.navigate}>
      <span class="icon-${this.direction}-open"></span>
    </a>
  `
}

Navlink.prototype.update = function (state, emit) {
  return state.direction !== this.direction || state.current !== this.current || state.availaibleYears !== this.availaibleYears
}

module.exports = Navlink
