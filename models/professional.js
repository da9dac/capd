const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('professional', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_dep_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'department',
        key: 'name'
      }
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'professional',
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
        name: "id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_dep_id_idx",
        using: "BTREE",
        fields: [
          { name: "fk_dep_name" },
        ]
      },
    ]
  });
};
