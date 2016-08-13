const html = require('choo/html')
const timeEvent = require('../elements/event')

function timeLine (state, send) {
  return html`
  <ul class="timeline">
    ${state.events.forEach(e => {
      return timeEvent(e)
    })}
  </ul>
  `
}

module.exports = timeLine
