var Sequelize = require('sequelize');
var sequelize = require('../configs/database');



  const Image = sequelize.define('image', {
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.BLOB('long')
      }
    });
    
    module.exports = Image