const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "학생번호 및 로그인아이디"
    },
    fk_department_name: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'department',
        key: 'name'
      }
    },
    fk_department_category: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'department',
        key: 'category'
      }
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2022
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "studentphone_UNIQUE"
    },
    mail: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "studentmail_UNIQUE"
    },
    rr: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    rs: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    major: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    normal: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'student',
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
        name: "studentid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "studentphone_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone" },
        ]
      },
      {
        name: "studentmail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mail" },
        ]
      },
      {
        name: "fk_department_id_idx",
        using: "BTREE",
        fields: [
          { name: "fk_department_name" },
        ]
      },
      {
        name: "fk_department_category_idx",
        using: "BTREE",
        fields: [
          { name: "fk_department_category" },
        ]
      },
    ]
  });
};
