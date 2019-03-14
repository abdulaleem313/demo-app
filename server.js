const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const app = express();
let options = { 
  }
  
app.use(express.static('public', options))
app.use(bodyparser.json()); 

app.post('/api/login', function(req, res){
    let userPayload = req.body;
    const fileData = fs.readFileSync('data/users.json', 'utf8');
    if(!fileData) {
        return res.send({success: false, message: 'File does not exist'});
    }
    console.log(userPayload)
    const listOfUsers = JSON.parse(fileData);
    const isFound = listOfUsers.find( user => user.email === userPayload.email && bcrypt.compareSync(userPayload.password, user.password) );

    if(isFound) {
        return res.send({success: true, message: 'User found', data: {email: isFound.email}});
    } else {
        res.send({success: false, message: 'No user found'})
    }
});


// create/add new user
app.post('/api/user', function(req, res){
    console.log(req.body)
    let userPayload = req.body;
    const fileData = fs.readFileSync('data/users.json', 'utf8');
    if(!fileData) {
        return res.send({success: false, message: 'File does not exist'});
    }
    const listOfUsers = JSON.parse(fileData);

    // if users.json file is empty
    if(!listOfUsers) {
        listOfUsers = [];
    }
    
    const isFound = listOfUsers.find( user => user.email === userPayload.email );
    if(isFound){
        return res.send({success: false, message: 'User already exist'});
    } 
    let hash = bcrypt.hashSync(userPayload.password, 10); 
    userPayload.password = hash;
    listOfUsers.push(userPayload) 
    fs.writeFileSync('data/users.json', JSON.stringify(listOfUsers));
    res.send({success: true, message: 'user created succesfuly'}); 
});

app.listen(3003);