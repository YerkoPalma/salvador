const html = require('choo/html')
const pageHeader = require('../elements/header')
const timeLine = require('../components/timeline')

const mainView = (state, prev, send) => {
  const showNextLink = () => {
    return html`
      <a class="nav-link right" href="#" onclick=${(e) => send('setYear', { year: state.current + 1 })}>
        <span class="icon-right-open"></span>
      </a>`
  }
  const showPrevLink = () => {
    return html`
      <a class="nav-link left" href="#" onclick=${(e) => send('setYear', { year: state.current - 1 })}>
        <span class="icon-left-open"></span>
      </a>`
  }

  return html`
    <div class="container">
      ${pageHeader(state.title, state.subTitle)}
      <section class="main">
        ${timeLine(state, send)}
        <div class="links">
          ${state.current < state.availaibleYears ? showNextLink() : ''}
          ${state.current > 1 ? showPrevLink() : ''}
        </div>
      </section>
    </div>
  `
}

module.exports = mainView
