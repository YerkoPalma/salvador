const getNumeral = year => {
  if ( year === 1 ) {
    return 'primer'
  } else if ( year === 2 ) {
    return 'segundo'
  }
}

module.exports = {
  state: {
    // should require some json with data
    title: 'Salvador Aarón Palma Navea',
    subTitle: 'Su primer añito',
    current: 1,
    availaibleYears: 2,
    events: []
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
      const year = data.year && data.year < state.availaibleYears
                   ? data.year
                   : 1
      const sub = getNumeral(year)
      const events = require(`../data/${year}.json`)
      send('setEvents', { year: data.year, events, sub })
    }
  }
}
