const { getNumeral } = require('../util')
const allYears = require('../data.json')

module.exports = {
  state: {
    title: 'Salvador Aarón Palma Navea',
    subTitle: 'Su primer añito',
    current: 1,
    availaibleYears: 2,
    events: allYears[0]
  },
  reducers: {
    /**
     * set the events for the given year
     */
    setEvents: (data, state) => {
      return {
        current: data.year,
        events: data.events,
        subTitle: `Su ${data.sub} añito`
      }
    }
  },
  effects: {
    /**
     * get the events for the given year
     */
    setYear: (data, state, send, done) => {
      // check that the given year is valid
      const year = data.year && data.year <= state.availaibleYears
                   ? data.year
                   : 1
      const sub = getNumeral(year)
      send('setEvents', { year: data.year, events: allYears[year - 1], sub }, done)
    }
  }
}
