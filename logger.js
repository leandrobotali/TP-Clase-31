const log4js = require('log4js')

log4js.configure({
  appenders: {
    consola: { type: 'console' },
    archivoErrores: { type: 'file', filename: 'error.log' },
    archivoWarnig: { type: 'file', filename: 'warn.log' },
    loggerConsola: {
      type: 'logLevelFilter',
      appender: 'consola',
      level: 'info',
    },
    loggerArchivoErrores: {
      type: 'logLevelFilter',
      appender: 'archivoErrores',
      level: 'error',
    },
    loggerArchivoWarnig: {
      type: 'logLevelFilter',
      appender: 'archivoWarnig',
      level: 'warn',
    },
  },
  categories: {
    default: {
      appenders: ['loggerConsola','loggerArchivoErrores', 'loggerArchivoWarnig'],
      level: 'all',
    },
    prod: {
      appenders: ['loggerArchivoErrores', 'loggerArchivoWarnig'],
      level: 'all',
    },
  },
})

let logger = null

if (process.env.NODE_ENV === 'production') {
  logger = log4js.getLogger('prod')
} else {
  logger = log4js.getLogger()
}

module.exports = logger