/* Panth Patel
   301197341
   Assignment 2 */
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let contbusController = require('../controllers/contbus');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to our contbus model
let contbus = require('../model/contbuss');
//let contbusController = require('../controllers/contbus');
//GET ROUTE for the contbus list page - READ OPERATION
router.get('/',contbusController.displaycontbusList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,contbusController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,contbusController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',requireAuth,contbusController.displayEditPage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',requireAuth,contbusController.processEditPage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,contbusController.performDelete);
module.exports = router;