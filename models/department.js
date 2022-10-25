const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "departmentname_UNIQUE"
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: "교학팀 위치"
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "iddepartment_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "departmentname_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "categoryname_UNIQUE",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
    ]
  });
};
