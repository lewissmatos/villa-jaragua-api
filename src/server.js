const express = require('express')
const cors = require('cors')
require('colors')

const {dbConnection} = require('./database/dbConnection')

const sectorRoute = require('./routes/sector.routes')
class Server{

    constructor(){

        this.port = process.env.PORT

        this.sectorPath = '/api/v1/sectors'

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

        this.app.use(this.sectorPath, sectorRoute )
    }

    listen(){
        this.app.listen(this.port, ()=> console.log(`Server listening at http://localhost:${this.port}`.blue))
    }
}

module.exports = Server