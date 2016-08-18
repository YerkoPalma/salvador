const html = require('choo/html')
const pageHeader = require('../elements/header')
const timeLine = require('../components/timeline')

const mainView = (state, prev, send) => {
  return html`
    <div class="container">
      ${pageHeader(state.title, state.subTitle)}
      <section class="main">
        ${timeLine(state, send)}
        <a onclick=${(e) => send('next', { year: state.current + 1 })}>Next</a>
      </section>
    </div>
  `
}

module.exports = mainView
