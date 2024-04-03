const express = require('express');
const cors = require('cors');
const path = require('node:path');
const mongoose= require('./database');
const dotenv = require('dotenv');
const data= require('./user.json');
const USER=require('./Model/User');
dotenv.config();
const port = process.env.PORT || 8080;


// configration
const app = express(); 
                                                 
app.use(express.json());

app.use(cors());
mongoose();


// Function to populate MongoDB with seed data
const addMockData = async () => {
    try {
      const users = await USER.find({});
      if(!users){
      // Remove existing data from the collection
        await USER.deleteMany();
    
        // Insert mock data into the collection
        await USER.insertMany(data);
        console.log('mock data added to MongoDB');
      }
    } catch (error) {
      console.error('Error populating database:', error);   
    }
  };
//defining routes path  
app.use(express.static(path.resolve(__dirname('build')));
app.use("/api/user", require("./Route/user"));
app.use("/api/query", require("./Route/search"));
app.use("/api/team", require("./Route/team"));

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
}


app.listen(port, () => {
    console.log(`server is working on port http://localhost:${port}`)
})
addMockData();





