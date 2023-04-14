const path = require('path');

const db= require('../util/database');

const employeeDetail = `
    CREATE TABLE IF NOT EXISTS employee (
      employee_id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (employee_id)
    )`
  
    db.query(employeeDetail, (err, result) => {
        if (err) throw err;
        console.log('Table created successfully');
      });

  const contactDetails = `
      CREATE TABLE IF NOT EXISTS contact_details(
        employee_id INT PRIMARY KEY NOT NULL,
        email VARCHAR(60) NOT NULL,
        mobile INT(20) NOT NULL,
        whatsapp INT(20) NOT NULL,
        skype VARCHAR(60) NOT NULL,
        FOREIGN KEY(employee_id) REFERENCES employee(employee_id)

      )
  `

  db.query(contactDetails,(err,result)=>{
    if(err) throw err;
    console.log('contact table created')
  })


  // db.query('DROP TABLE employee', (err,result)=>{
  //   console.log("ho gya")
  // })

