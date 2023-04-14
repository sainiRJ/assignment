const express = require('express')
const path = require("path");

const router = express.Router();

const employeeController= require("../controller/employee")

router.post('/employee',employeeController.createEmployeeDetail)

router.get('/:id',employeeController.getEmployeeDetail)

router.post('/deleteEmployee/:id',employeeController.deleteEmployeeDetail)

router.post('/updateEmployee/:employee_id',employeeController.updateEmployee)

router.get('/listEmployee/:page/:perPage',employeeController.listEmployee)



module.exports=router;
