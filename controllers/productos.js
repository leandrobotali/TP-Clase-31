const { faker } = require('@faker-js/faker')
const logger = require('../logger.js')

const generarProductos = () =>{
    try {
        const productos = []
        
        for (let index = 0; index < 5; index++) {
            const obj = {
                titulo: faker.name.findName(),
                precio: faker.commerce.price(),
                thumbnail: faker.image.imageUrl()
            }
            productos.push(obj)
        }
    
        return productos
    } catch (err) {
        logger.error(err)
    }
}

module.exports = { generarProductos }