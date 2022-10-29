/* Panth Patel
   301197341
   Assignment 2 */
let mongoose = require('mongoose');
let contbusModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number

},

{
    collection:"contbuss"
});

module.exports = mongoose.model('contbus',contbusModel);