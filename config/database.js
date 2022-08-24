const Sequelize = require('sequelize'); 

const sequelize = new Sequelize('netflix', 'root', null, {
  dialect: 'mysql',
  host: 'localhost',
  port: '3306'
} );

module.exports = sequelize;