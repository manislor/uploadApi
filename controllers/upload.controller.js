const fs = require('fs');
const controller = {}
 
// import model and sequelize
var sequelize = require('../configs/database');
var Image = require('../models/img.model'); 

// para migrar por si no tiene tablas
sequelize.sync()


controller.test = (req,res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  console.log("Send data from controller employee");
  res.json(data);

};

// Upload a Multipart-File then saving it to MySQL database
controller.upload = (req, res) => {  
  Image.create({
    type: req.file.mimetype,
    name: req.file.originalname,
    data: fs.readFileSync(__basedir + '/public/uploads/' + req.file.filename)
  }).then(image => {
    try{
      fs.writeFileSync(__basedir + '/public/tmp/' + image.name, image.data);    
      
      // exit node.js app
      res.json({'msg': 'File uploaded successfully!', 'file': req.file});
    }catch(e){
      console.log(e);
      res.json({'err': e});
    }
  })
};

module.exports = controller;