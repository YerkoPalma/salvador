/* global lightGallery */
var Nanocomponent = require('nanocomponent')
var html = require('choo/html')
require('../lib/lightgallery.js')
require('lg-video.js')

function Imagegallery (event, index) {
  if (!(this instanceof Imagegallery)) return new Imagegallery(event, index)
  this.images = event.images
  this.id = 'image-' + index
  Nanocomponent.call(this)
}
Imagegallery.prototype = Object.create(Nanocomponent.prototype)

Imagegallery.prototype.createElement = function (state, emit) {
  return html`
    <div class="lightgallery" id="${this.id}">
    ${this.images.map((image) => {
      return html`<a href="assets/${image}"><img src="assets/${image}"/></a>`
    }, '')}
  </div>
  `
}

Imagegallery.prototype.load = lightGallery

Imagegallery.prototype.update = function (state, emit) {
  return true
}

module.exports = Imagegallery
