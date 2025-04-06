var express = require("express");
var router = express.Router();
var cors = require('cors');

allowedOrigins=[
  'http://localhost:8100',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:5000',
  'capacitor://localhost',
  '*',
  'https://govcarpeta-apis-83e1c996379d.herokuapp.com'
]

const corsOptions = {
  origin: (origin, callback) =>{

    if (allowedOrigins.includes(origin)|| !origin){
      callback(null,true);

    }
    else{
      callback(new Error('Origin is not allowed by Cors in la Gov Carpeta'))
    }
  }
  
}

const {
  authenticateDocument,
  unregisterCitizen,
} = require("../apis/validateGovCarpeta.api");
const {
  registerTransferEndPoint,
  registerOperator,
  getOperators
}=require("../apis/operator.api");

const citizenController = require("../controllers/citizen");
const operatorController=require("../controllers/operator")

// Api route.
/* *********************** Route Api Create Persona*********************** */

router.get("/", function (req, res) {
  res.json({ info: "GovCarpeta Backend Apis" });
});
//router.get(`/validateCitizen/:id`, validateCitizen);
//router.post(`/registerCitizen`, registerCitizen);
router.get(`/validateCitizen/:id`,cors(corsOptions), citizenController.findCitizenById);
router.post(`/registerCitizen`,cors(corsOptions), citizenController.addCitizens);
router.put(
  `/authenticateDocument`,cors(corsOptions),
  authenticateDocument
);
router.delete(
  `/unregisterCitizen`,cors(corsOptions),citizenController.RemoveCitizenById);
router.put(`/registerTransferEndPoint`,cors(corsOptions), operatorController.updateOperator);
router.post(`/registerOperator`,cors(corsOptions), operatorController.addOperator);
router.get(`/getOperators`,cors(corsOptions),operatorController.findAllOperators );
module.exports = router;
