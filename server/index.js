require('dotenv').config()

const express = require('express')
const sequelize=require('./db')
const models= require('./models/models.js')
const cors = require ('cors')
const fileupload = require('express-fileupload')
const router = require ('./routers/index.js')
const errorHandler=require('./Middleware/ErrorHandlingMiddleware.js')
const path = require ('path')


const PORT = process.env.PORT

const app = express ()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileupload({}))
app.use('/api',router)

//Error handaling. Last Middleware
app.use(errorHandler)

const start = async () => {
  try{
    await sequelize.authenticate()
    await sequelize.sync()
     app.listen(PORT, console.log('Server started on port %s ', PORT))
  }catch (e){
    console.log(e);
  }
}

start()
