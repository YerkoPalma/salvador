const events = require('../data.json')

module.exports = {
  state: {
    // should require some json with data
    title: 'Salvador Aarón Palma Navea',
    subTitle: 'Su primer añito',
    events: events
  },
  reducers: {
    /**
     * set initial data
     */
    init: (data, state) => {}
  },
  effects: {
    /**
     * player move
     */
    makeMove: (data, state, send, done) => {}
  }
}
