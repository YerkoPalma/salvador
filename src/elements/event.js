function timeEvent (event) {
  return `
  <li class="event">
    <input type="radio" name="tl-group" checked />
    <label></label>
    <div class="thumb user-4"><span>${event.date}</span></div>
    <div class="content-perspective">
      <div class="content">
        <div class="content-inner">
          <h3>${event.title}</h3>
          <p>${event.description}</p>
          ${event.images.reduce((initialImage, currentImage) => {
            const initialTag = initialImage && initialImage !== ''
                              ? `<a href="${initialImage}"><img src="${initialImage}"/></a>`
                              : ''
            const currentTag = currentImage && currentImage !== ''
                              ? `<a href="${currentImage}"><img src="${currentImage}"/></a>`
                              : ''
            return initialTag + currentTag
          }, '')}
        </div>
      </div>
    </div>
  </li>
  `
}

module.exports = timeEvent
