var Nanocomponent = require('nanocomponent')
var html = require('bel')
var TimeEvent = require('./timeevent')

function Timeline () {
  if (!(this instanceof Timeline)) return new Timeline()
  this.events = null
  this.currentYear = null
  Nanocomponent.call(this)
}
Timeline.prototype = Object.create(Nanocomponent.prototype)

Timeline.prototype.createElement = function (state, emit) {
  this.currentYear = state.current
  this.events = state._events
  return html`
    <ul class="timeline">
      ${this.events.map(function (event, index) {
        console.log(event)
        return TimeEvent(event, index).render(state, emit)
      })}
    </ul>
  `
}

Timeline.prototype.update = function (state, emit) {
  return this.currentYear !== state.current
}

module.exports = Timeline
