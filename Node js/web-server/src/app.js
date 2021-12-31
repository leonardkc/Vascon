const path = require('path')
const express = require('express')
const hbs = require('hbs')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

// Define paths for Express config
const app = express()
const publicDirectoryPath = path.join(__dirname + '../public')
const viewPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')


// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ndulue Mike'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ndulue'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some hepful text!',
        title: 'Help',
        name: 'Michael'
    })
})
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

app.get('/weather', (req, res) => {
    if (!req.query.address){
        return res.send({
            error: 'You must provide an address!'
        })
    }
    res.send({
        forecast: 'It is snowing',
        location: 'Nigeria',
        address: req.query.search
    })
})

app.get('/products', (req, res) => {
    if (req.query.search){
        res.send({
            error: 'You must provide a search term '
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})

// Goal: Create two more html files
// 1. Create a html page for about with "About" title
// 2. Create a html page for help with "Help" title
// 3. Remove the old route handlers for both
// 4. Visit both in the browser to test your work.

// PS C:\Users\user\Documents\Pro\Node js\web-server\src>