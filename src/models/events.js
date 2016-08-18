module.exports = {
  state: {
    title: 'Salvador Aarón Palma Navea',
    subTitle: 'Su primer añito',
    current: 1,
    events: require('../data/1.json')
  },
  reducers: {
    /**
     * go to the page
     */
    changeYear: (data, state) => {
      return {
        current: data.year,
        events: require(`../data/${data.year}.json`)
      }
    }
  },
  effects: {
    /**
     * go to the next page (year)
     */
    next: (data, state, send, done) => {
      // add 1 to the current year
      send('changeYear', { year: data.year })

      // now simulate a page change
      const firstEvent = document.querySelector('li.event:first-child')
      const selectedEvent = document.querySelector('input:checked')

      // 1. uncheck the currently checked radiobutton
      selectedEvent.checked = false
      // 2. hide to the left every event with a delay
      // 3. when done, fadeOut subTitle
      // 4. fadeIn new subTitle
      // 5. make new events appear from the right
    },
    /**
     * go to the previous page (year)
     */
    prev: (data, state, send, done) => {}
  },
  subscriptions: [
    (send, done) => {
      document.addEventListener('transitionend', e => {
        const target = e.target
      })
    }
  ]
}
