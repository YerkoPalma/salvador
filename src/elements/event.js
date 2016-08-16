/* global lightGallery */
const html = require('choo/html')

function timeEvent (event) {
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
          <div class="lightgallery" onload=${(el) => { lightGallery(el) }}>
            ${event.images.map((image) => {
              return html`<a href="src/assets/${image}"><img src="src/assets/${image}"/></a>`
            }, '')}
          </div>
        </div>
      </div>
    </div>
  </li>
  `
}

module.exports = timeEvent
