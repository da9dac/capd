const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subject', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fk_pro_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'professional',
        key: 'id'
      }
    },
    fk_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    credit: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'subject',
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
        name: "fk_pro_id_idx",
        using: "BTREE",
        fields: [
          { name: "fk_pro_id" },
        ]
      },
    ]
  });
};
