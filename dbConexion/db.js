const admin = require("firebase-admin");
const logger = require('../logger.js')

const serviceAccount = require("./mensajes-d4edd-firebase-adminsdk-sx1af-14596b4190.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

logger.info('DB firebase is conected')

const db = admin.firestore();

module.exports = db