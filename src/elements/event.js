const html = require('choo/html')

function timeEvent (event) {
  return html`
  <li class="event">
    <input type="radio" name="tl-group" checked/>
    <label></label>
    <div class="thumb user-4"><span>${event.date}</span></div>
    <div class="content-perspective">
      <div class="content">
        <div class="content-inner">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          ${event.images.forEach(image => {
            return html`<a href="${image}"><img src="${image}"/></a>`
          })}
        </div>
      </div>
    </div>
  </li>
  `
}

module.exports = timeEvent
