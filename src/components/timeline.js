const html = require('choo/html')
const timeEvent = require('../elements/event')

function timeLine (state, send) {
  return html`
  <ul class="timeline">
    ${state.events.map((event, index) => {
      return timeEvent(event, index)
    })}
  </ul>
  `
}

module.exports = timeLine
