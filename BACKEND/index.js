const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const cors = require('cors')
const mysql = require('mysql');
const myConnection = require('express-myconnection')
const path = require('path')

const { database_1 } = require('./database/db')

//ajustes
app.set('view engine','ejs')
app.set('views', path.join(__dirname, "../FRONTEND/views"))

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(myConnection(mysql, {
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: 3306,
    database: process.env.database
}, 'single'))
app.use(express.urlencoded({extended: false}));

app.set('PORT', process.env.PORT || 4050)

//import routes
const vehiculosRoutes = require('./Routes/routes')

//rutas
app.use('/', vehiculosRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')))
// lanzamiento de servidor
app.listen(app.get('PORT'), () =>{
    console.log(`Server running in port ${app.get('PORT')}`)
})