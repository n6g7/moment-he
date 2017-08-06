const moment = require('moment')

const iso8601toHE = year => year + 10000

moment.fn.he =
moment.fn.humanEra = function (format, suffix = false) {
  const initialFormat = this.format(format)

  return initialFormat.replace(
    /[+-]?\d{4,}/g,
    match => {
      const value = iso8601toHE(parseInt(match))
      return suffix ? `${value} HE` : value
    }
  )
}

module.exports = moment
