/* global $ */
const html = require('choo/html')

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
              : videoGallery(event.images)
            }
        </div>
      </div>
    </div>
  </li>
  `
}

const imageGallery = (images, id) => {
  return html`<div class="lightgallery" id="${id}" onload=${(el) => { $('#' + id).lightGallery({ thumbnail: true }) }}>
    ${images.map((image) => {
      return html`<a href="src/assets/${image}"><img src="src/assets/${image}"/></a>`
    }, '')}
  </div>`
}

const videoGallery = (videos) => {
  return html`
    <div>
      ${videos.map((video, index) => {
        return html`
          <div style="display:none;" id="video${index}">
            <video class="lg-video-object lg-html5" controls preload="none">
              <source src="src/assets/${video}" type="video/mp4">
               Your browser does not support HTML5 video.
            </video>
          </div>`
      })}
      <ul id="html5-videos">
        ${videos.map((video, index) => {
          return html`
            <li data-sub-html="video caption1" data-html="#video${index}" >
              <img src="src/assets/3-sep" />
            </li>`
        })}
      </ul>
    </div>
  `
}

module.exports = timeEvent
