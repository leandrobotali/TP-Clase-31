const {normalize, denormalize, schema} = require('normalizr')
const db = require('../dbConexion/db');
const logger = require('../logger.js')

const query = db.collection('mensajes')

const getAllMessage = async ()=>{
    try{
        const messageALL = await query.get();
        const message = messageALL.docs.map((doc)=>({
            ...doc.data()
        }))
        return(message)
    }catch(err){
        logger.error(err)
    }    
}

const createMessage = async (data)=>{
    try{
        const arrayMsj = await getAllMessage()
        let idMasAlto = 0;
        if (arrayMsj.length > 0) {
            idMasAlto = arrayMsj.reduce((acum, proximo) => acum > proximo.id ? acum : proximo.id, 0);
        }
        const idObj = idMasAlto + 1
        const {author, message} = data
        await query.add({
            id: idObj,
            author,
            message
        })
    }catch(err){
        logger.error(err)
    }
}

const nomalizarData = (data) => {
    try {
        
        const chat = {
            id: 'mensajes',
            post: []
        }
        
        chat.post = data
        
        const autorSchema = new schema.Entity('authors',{},{idAttribute:'email'})
        
        const mensajeSchema = new schema.Entity('messages',{},{idAttribute:'hora'})
        
        const postSchema = new schema.Entity('post', {
            author: [autorSchema],
            messages: [mensajeSchema]
        })
        
        
        const normalizeObj = normalize(chat, postSchema);
        
        return normalizeObj
    } catch (err) {
        logger.error(err)
    }
    }
    
    

module.exports = {getAllMessage,createMessage, nomalizarData}