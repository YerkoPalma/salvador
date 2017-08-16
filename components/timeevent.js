var Nanocomponent = require('nanocomponent')
var ImageGallery = require('./imagegallery')
var VideoGallery = require('./videogallery')
var html = require('bel')

function TimeEvent (event, index) {
  if (!(this instanceof TimeEvent)) return new TimeEvent(event, index)
  this.event = event
  this.index = index
  this.media = null
  Nanocomponent.call(this)
}
TimeEvent.prototype = Object.create(Nanocomponent.prototype)

TimeEvent.prototype.createElement = function (state, emit) {
  this.media = this.event.type === 'image'
                 ? ImageGallery(this.event, this.index)
                 : VideoGallery(this.event, this.index)
  return html`
    <li class="event">
      <input type="radio" name="tl-group" ${this.index === 0 ? 'checked' : ''} />
      <label></label>
      <div class="thumb ${this.event.thumbnail}"><span>${this.event.date}</span></div>
      <div class="content-perspective">
        <div class="content">
          <div class="content-inner">
            <h3>${this.event.title}</h3>
            <p>${this.event.description}</p>
              ${this.media.render(state, emit)}
          </div>
        </div>
      </div>
    </li>
  `
}

TimeEvent.prototype.update = function (state, emit) {
  // need to shallow diff event here
  return this.event !== null && this.event !== undefined
}

module.exports = TimeEvent
