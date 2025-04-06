const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let OperatorsShema = new Schema(
  {
   /* operatorId: {
      type: Number,
      unique: true,
      default:0
    },*/
    operatorName: {
      type: String,
      required: [true, "Nombre del Operador es requerido"],
    },
    address: {
      type: String,
      required: [true, "Direccion del Operador es requerida"],
    },
    ContactMail: {
      type: String,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "{VALUE} formato de email del Operador no es valido!",
      },
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Por Favor ingresar un email Valido",
      ],
      required: [true, "Email Requerido"],
    },
    participants:{
    type:Array,
    required: [true, "participantes Requerido"]
    },
    transferAPIURL:{
      type:String,
      required: [false, "transferAPIURL Opcional"],
     },
     transferAPIURLConfirm:{
      type:String,
      required: [false, "transferAPIURLConfirm Opcional"],
     },
    nota1:{
      type:Number,
      required:[false,"Nota 1 Opcional"]
    }
    ,
    nota2:{
      type:Number,
      required:[false,"Nota 2 Opcional"]
    },
    notafinal:{
      type:Number,
      required:[false,"Nota Final Opcional"]
    }
  },

  { collection: "operators" }
);

var operatorModel = mongoose.model("operatorModel", OperatorsShema);

module.exports = operatorModel;