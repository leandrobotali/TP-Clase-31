const mongoose = require('mongoose');
const logger = require('../logger.js')

const { MONGODB_USER, MONGODB_PASS, MONGODB_HOST, MONGODB_DATABASE } = process.env;

const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI)
.then(db => logger.info('DB mongo is connected'))
.catch(err => {
    console.error('connection error')
    process.exit(1)
});