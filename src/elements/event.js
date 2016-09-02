/* global lightGallery */
const html = require('choo/html')
require('lightgallery.js')
require('lg-video.js')

function timeEvent (event, i) {
  return html`
  <li class="event">
    <input type="radio" name="tl-group" ${event.date === '03 Sep' ? 'checked' : ''} />
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
              : videoGallery(event.images, i)
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

const videoGallery = (videos, id) => {
  return html`
    <div>
      ${videos.map((video, index) => {
        return html`
          <div style="display:none;" id="video${id}">
            <video class="lg-video-object lg-html5" controls preload="none">
              <source src="src/assets/${video}" type="video/mp4">
               Your browser does not support HTML5 video.
            </video>
          </div>`
      })}
      <ul id="html5-videos" onload=${(el) => { lightGallery(el) }}>
        ${videos.map((video, index) => {
          return html`
            <li data-sub-html="video caption${index}" data-html="#video${id}" >
              <img src="src/assets/images/3-sep.jpg" />
            </li>`
        })}
      </ul>
    </div>
  `
}

module.exports = timeEvent
