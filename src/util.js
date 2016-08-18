const getNumeral = year => {
  if ( year === 1 ) {
    return 'primer'
  } else if ( year === 2 ) {
    return 'segundo'
  }
}

const fs = {
  read: (url, cb) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => {
      cb(request.response)
    }
    request.onerror = (e) => {
      console.log('error while reading')
      return e
    }
    request.send()
  }
}

module.exports = {
  getNumeral,
  fs
}