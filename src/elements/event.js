/* global lightGallery */
const html = require('choo/html')
require('lightgallery.js')
require('lg-video.js')

function timeEvent (event, i) {
  return html`
  <li class="event">
    <input type="radio" name="tl-group" ${i === 0 ? 'checked' : ''} />
    <label></label>
    <div class="thumb ${event.thumbnail}"><span>${event.date}</span></div>
    <div class="content-perspective">
      <div class="content">
        <div class="content-inner">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
            ${
              event.type === 'image'
              ? imageGallery(event.images, 'event-' + i)
              : videoGallery(event, i)
            }
        </div>
      </div>
    </div>
  </li>
  `
}

const imageGallery = (images, id) => {
  return html`<div class="lightgallery" id="${id}" onload=${(el) => { lightGallery(el) }}>
    ${images.map((image) => {
      return html`<a href="src/assets/${image}"><img src="src/assets/${image}"/></a>`
    }, '')}
  </div>`
}

const videoGallery = (event, id) => {
  return html`
    <div>
      ${event.images.map((video, index) => {
        return html`
          <div style="display:none;" id="video${id}">
            <video class="lg-video-object lg-html5" controls preload="none">
              <source src="src/assets/${video}" type="video/mp4">
               Your browser does not support HTML5 video.
            </video>
          </div>`
      })}
      <ul id="html5-videos" class="list-unstyled" onload=${(el) => { lightGallery(el) }}>
        ${event.images.map((video, index) => {
          return html`
            <li data-sub-html="${event.title}" data-html="#video${id}" >
              <img src="src/assets/images/second/${event.videoThumbnail}" />
            </li>`
        })}
      </ul>
    </div>
  `
}

module.exports = timeEvent
