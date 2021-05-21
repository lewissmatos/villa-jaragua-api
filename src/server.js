const express = require('express')
const cors = require('cors')
require('colors')

const {dbConnection} = require('./database/dbConnection')

class Server{

    constructor(){

        this.port = process.env.PORT

        this.app = express()
        
        this.database()

        this.middlewares()

        this.routes()
    }

    async database(){
        await dbConnection()
    }

    middlewares(){
        this.app.use(   cors()  );
        this.app.use(   express.json()  )
    }

    routes(){
        this.app.get('/', (req , res)=> res.send('API de Villa Jaragua'))
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(`Server listening at http://localhost/${this.port}`.blue))
    }
}

module.exports = Server