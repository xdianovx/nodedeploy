const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config();

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

app.get('/contacts', (req, res) => {
    res.render('contacts', {
        title: 'Контакты'
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Server has been running on port ${process.env.PORT}`)
})