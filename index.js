const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
    var number = request.query.number

    if (number != undefined && number != '') {    
        var result = Math.pow(number, 2)
        response.render('home', {
            result: 'Число ' + number + ' в квадрате = ' + result
        })
    }
    else {
        response.render('home', {
            result: ''
        })
    }        
})

app.get('/', (request, response) => {
    response.render('home');        
})

app.listen(3000)