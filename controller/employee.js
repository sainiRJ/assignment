const path = require("path");

const express = require('express');

const db= require('../util/database')

const model= require('../models/employee')

exports.createEmployeeDetail = (req,res,next)=>{
    const employee_id = req.body.employee_id;
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const whatsapp= req.body.whatsapp;
    const skype = req.body.skype;

    const sql1 ="INSERT INTO employee(employee_id,name) VALUES(?,?)";
    db.query(sql1,[employee_id,name],(err,result)=>{
        if(err) throw err; 
        const sql2 ="INSERT INTO contact_details(employee_id,email,mobile,whatsapp,skype) VALUES(?,?,?,?,?)";
    db.query(sql2,[employee_id,email,mobile,whatsapp,skype],(err,result)=>{
        if(err) throw err; 
        res.send("student ragister successfull")
    })
        
    })
}


exports.getEmployeeDetail= (req,res,next)=>{
    const id = req.params.id;
    const sql = `SELECT *
    FROM employee
    JOIN contact_details
    ON employee.employee_id = contact_details.employee_id
    WHERE employee.employee_id = ?
    `
    db.query(sql,[id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
}

exports.deleteEmployeeDetail= (req,res,next)=>{
const id =req.params.id;
const sql1 = `
    DELETE FROM contact_details
    WHERE employee_id=?
`
const sql2 = `
    DELETE FROM employee
    WHERE employee_id=?
`
    db.query(sql1,[id],(err,result)=>{
        if(err) throw err;
    })
    db.query(sql2,[id],(err,result)=>{
        if(err) throw err;
        res.send("deleted successfully")
    })
}


exports.updateEmployee=(req,res,next)=>{
    const employee_id = req.body.employee_id;
    const name = req.body.name;
   const contact ={
    email : req.body.email,
    mobile : req.body.mobile,
    whatsapp:req.body.whatsapp,
    skype : req.body.skype} 

    const sql1= `UPDATE employee SET ? WHERE employee_id=?;`
    const sql2= `UPDATE contactDetails SET ? WHERE employee_id=?`
    db.query(sql1,[name,employee_id],(err,result)=>{
        if(err) throw err;
    })
    db.query(sql2,[contact],(err,result)=>{
        if(err) throw err;
        res.send("update successfully")
    })
}

exports.listEmployee= (req,res,next)=>{
    const page = req.params.page;
    const perPage = req.params.perPage;
    const startIndex = (page - 1) * perPage;

    const sql= `
        SELECT * 
        FROM employee
        JOIN contact_details ON employee.employee_id=contact_details.employee_id
        LIMIT ${perPage} OFFSET ${startIndex};
    `

    db.query(sql,(err,result)=>{
        if(err) throw err;
        res.json(result)
    })
}