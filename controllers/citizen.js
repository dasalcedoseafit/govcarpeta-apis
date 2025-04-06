const citizen = require("../models/citizens");


exports.addCitizens = function (req, res) {
  var { id, name, address, email, operatorId, operatorName } = req.body;
  var identification = id;
  var data = { identification, name, address, email, operatorId, operatorName };
  citizen.insertMany(data, function (err, result) {
    if (err)
      if (err.code === 11000)
        res
          .status(501)
          .json(
            `Error al crear Ciudadano con id: ${req.body.id} ya se encuentra registrado en la carpeta ciudadana `
          );
      else
        res
          .status(501)
          .json(
            `Error al crear Ciudadano con id: ${req.body.id} relacionado con OPerador: ${req.body.operatorName} Error.Message: ${err.message} `
          );
    else
      res
        .status(201)
        .json(
          `Ciudadano con id: ${req.body.id} relacionado con OPerador: ${req.body.operatorName}   Creado exitosamente`
        );
  });
};

exports.findCitizenById = function (req, res) {
  var id = req.params.id;
  citizen.find({ identification: id }, function (err, result) {
    if (err) res.status(501).json(`error al consultar`);
    else {
      if (result.length > 0)
        res
          .status(200)
          .json(
            `El ciudadano con id: ${result[0].identification} se encuentra registrado en el operador: ${result[0].operatorName} `
          );
      else res.status(204).send();
    }
  });
};

exports.RemoveCitizenById = function (req, res) {
  var { id, operatorId, operatorName } = req.body;
  citizen.findOneAndDelete({ identification: id }, function (err, docs) {
    if (err) res.status(501).json(`error al consultar`);
    else {
      if (docs)
        res
          .status(200)
          .json(
            `El ciudadano con id: ${docs.identification} se ha desligado en el operador: ${docs.operatorName} `
          );
      else res.status(204).json(`El ciudadano con id: ${id} no se ha encontrado`);
    }
  });
};
