/* global lightGallery */
var Nanocomponent = require('nanocomponent')
var html = require('bel')
require('../lib/lightgallery.js')
require('lg-video.js')

function Videogallery (event, index) {
  if (!(this instanceof Videogallery)) return new Videogallery(event, index)
  this.videos = event.images
  this.title = event.title
  this.thumbnail = event.videoThumbnail
  this.id = 'video-' + index
  Nanocomponent.call(this)
}
Videogallery.prototype = Object.create(Nanocomponent.prototype)

Videogallery.prototype.createElement = function (state, emit) {
  var self = this
  return html`
    <div>
      ${self.videos.map((video, index) => {
        return html`
          <div style="display:none;" id="${self.id}">
            <video class="lg-video-object lg-html5" controls preload="none">
              <source src="assets/${video}" type="video/mp4">
               Your browser does not support HTML5 video.
            </video>
          </div>`
      })}
      <ul id="html5-videos" class="list-unstyled">
        ${self.videos.map((video, index) => {
          return html`
            <li data-sub-html="${self.title}" data-html="#${self.id}" >
              <img src="assets/images/second/${self.thumbnail}" />
            </li>`
        })}
      </ul>
    </div>
  `
}

Videogallery.prototype.load = function (el) {
  var ul = el.querySelector('#html5-videos')
  lightGallery(ul || el)
}

Videogallery.prototype.update = function (state, emit) {
  return true
}

module.exports = Videogallery
