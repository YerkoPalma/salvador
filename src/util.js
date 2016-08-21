const getNumeral = year => {
  console.log(year)
  if (year === 1) {
    return 'primer'
  } else if (year === 2) {
    return 'segundo'
  }
}

module.exports = {
  getNumeral
}
