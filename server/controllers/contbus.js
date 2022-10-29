/* Panth Patel
   301197341
   Assignment 2 */
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let contbus = require('../model/contbuss');
module.exports.displaycontbusList = (req,res,next)=>{
    contbus.find((err,contbusList)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(contbusList);
         res.render('contbus/list', 
         {title:'contbuss', contbusList:contbusList,
        displayName:req.user ? req.user.displayName:''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('contbus/add',{title:'Add contbus',
    displayName:req.user ? req.user.displayName:''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newcontbus = contbus({
        "name": req.body.name,
        "number":req.body.number,
        "email":req.body.email
    });
    contbus.create(newcontbus,(err,contbus)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/contbusList');
        }
    });
    }
    
        module.exports.displayEditPage = (req,res,next)=>{
            let id = req.params.id;
            contbus.findById(id,(err,contbusToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('contbus/edit',{title:'Edit contbus', contbus: contbusToEdit,
                    displayName:req.user ? req.user.displayName:''});
                }
            
            });
        }

        module.exports.processEditPage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedcontbus = contbus({
                "_id":id,
                "name":req.body.name,
                "number":req.body.number,
                "email":req.body.email
            });
            contbus.updateOne({_id:id}, updatedcontbus,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/contbusList');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            contbus.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/contbusList');
                }
                
            });
            }
        