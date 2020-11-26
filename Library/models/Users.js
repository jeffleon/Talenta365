'use strict';
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database/db')
class User extends Model{}
User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{
        msg:"Campo Obligatorio"
      },
      isAlpha: {
        args: true,
        msg: "Solo se admiten letras"
      },
      len:{
        args: [3, 50],
        msg: "La longitud minima es de 3 digitos y maximo 50"
      }
    }
  },
  lastName: {
    type:DataTypes.STRING,
    validate:{
      isAlpha: {
        args: true,
        msg: "Solo se admiten letras"
      },
      len:{
        args: [3, 50],
        msg: "La longitud minima es de 3 digitos y maximo 50"
      }
    }
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: {
        args: true,
        msg: "El campo tiene que ser un correo valido"
      }
    }
  }
},{
  sequelize,
  modelName: "user",
  timestamps: false
})

module.exports = User;