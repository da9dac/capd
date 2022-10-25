const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Department = require('./department')(sequelize, Sequelize);
db.Professional = require('./professional')(sequelize, Sequelize);
//db.Score = require('./score')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);
db.Subject = require('./subject')(sequelize, Sequelize);

db.Professional.belongsTo(db.Department, { as: "fk_dep_name_department", foreignKey: "fk_dep_name" });
db.Department.hasMany(db.Professional, { as: "professionals", foreignKey: "fk_dep_name" });
db.Student.belongsTo(db.Department, { as: "fk_department_category_department", foreignKey: "fk_department_category" });
db.Department.hasMany(db.Student, { as: "students", foreignKey: "fk_department_category" });
db.Student.belongsTo(db.Department, { as: "fk_department_name_department", foreignKey: "fk_department_name" });
db.Department.hasMany(db.Student, { as: "fk_department_name_students", foreignKey: "fk_department_name" });
db.Subject.belongsTo(db.Professional, { as: "fk_pro", foreignKey: "fk_pro_id" });
db.Professional.hasMany(db.Subject, { as: "subjects", foreignKey: "fk_pro_id" });

module.exports = db;
