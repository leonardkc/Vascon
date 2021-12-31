const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
});



// const me = new User({
//     name: '   Mike  ',
//     email: 'ndulueleonard@gmail.com  ',
//     password: 'claf7187!'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch ((error) => {
//     console.log('Error!', error)
// })

