const html = require('choo/html')

function pageHeader (title, subTitle) {
  return html`
  <header class="clearfix">
    <h2>${title.trim()} <span>${subTitle.trim()}</span></h2>
  </header>
  `
}

module.exports = pageHeader
