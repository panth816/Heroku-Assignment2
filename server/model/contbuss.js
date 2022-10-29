/* Panth Patel
   301197341
   Assignment 2 */
let mongoose = require('mongoose');
let contbusModel = mongoose.Schema({
    name: String,
    email: String,
    number: Number

},

{
    collection:"contbus"
});

module.exports = mongoose.model('contbus',contbusModel);