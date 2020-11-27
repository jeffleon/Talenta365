'use strict';
const {Model, DataTypes} = require('sequelize');
const dataTypes = require('sequelize/lib/data-types');
const sequelize = require('../database/db')
// Book model with attribute id , title , author , year borrow
// timestamps false to delete create_at and delete_at
// validation
// is alpha: only allow strings letters
// len: specificate the min value and max value that is allowed
class Book extends Model{}
Book.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"Campo Obligatorio"
      },
      len:{
        args: [2, 255],
        msg: "La longitud minima es de 2 digitos y maximo 255"
      }
    }
  },
  author: {
    type:DataTypes.STRING,
    validate:{
      len:{
        args: [3, 50],
        msg: "La longitud minima es de 3 digitos y maximo 50"
      }
    }
  },
  year: {
    type: DataTypes.INTEGER,
    validate: {
      isNumeric: {
        args: true,
        msg: "Solo se permiten numeros"
      }
    }
  },
  borrow:{
      type: dataTypes.BOOLEAN,
      defaultValue: true
  }
},{
  sequelize,
  modelName: "book",
  timestamps: false
})

module.exports = Book;