const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let CitizensShema = new Schema(
  {
    identification: {
      type: Number,
      unique: true,
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message:
          "{VALUE} formato de identificacion del Ciudadano no es valido debe ser de 10 digitos!",
      },
      required: [true, "Identificacion del Ciudadano es requerida"],
    },
    name: {
      type: String,
      required: [true, "Nombre del Ciudadano es requerida"],
    },
    address: {
      type: String,
      required: [true, "Direccion del Ciudadano es requerida"],
    },
    email: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "{VALUE} formato de email del Ciudadano no es valido!",
      },
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Por Favor ingresar un email Valido",
      ],
      required: [true, "Email Requerido"],
    },
    operatorId: {
      type: String,
      required: [true, "Id de Operador Requerido"],
    },
    operatorName: {
      type: String,
      required: [true, "Nombre de Operador Requerido"],
    },
  },
  { collection: "citizens" }
);

var citizenModel = mongoose.model("citizenModel", CitizensShema);

module.exports = citizenModel;
