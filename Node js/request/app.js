const request = require('request')

const url = 'https://www.binance.com/en/my/dashboard'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data)
})  