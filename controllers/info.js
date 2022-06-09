
const logger = require('../logger.js')
const getInfo= (req,res) => {
    logger.info('peticion recibida a la ruta info')
    const info = {
        "Path de ejecucion": process.execPath,
        "Carpeta del proyecto": process.argv[1],
        "Argumentos de ejecucion": process.execArgv,
        "Plataforma": process.platform,
        "Version de Node": process.version,
        "Id del proceso": process.pid,
        "Memoria total Reservada": process.memoryUsage().rss
    }
    res.status(200).json(info)
} 


module.exports = { getInfo }