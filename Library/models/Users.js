'use strict';
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../database/db')
// User model with attribute id , firstName , lastName , email
// timestamps false to delete create_at and delete_at
// validations
// is alpha: only allow strings letters
// len: specificate the min value and max value that is allowed
// isEmail: only allow a valid email
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