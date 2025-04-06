const validateCitizen = (request, response) => {
  var { id } = request.params;
  if (!Number(id) || id === null) {
    return response
      .status(501)
      .json("el dato ingresado contiene un tipo de dato incorrecto");
  } else {
    var rerturn_response = `El ciudadado con cedula: ${id} no presenta registro en otro operador [Code: 0001]`;
    return response.status(200).json(rerturn_response);
  }
};

const authenticateDocument = (request, response) => {
  var { idCitizen, UrlDocument, documentTitle } = request.body;
  if (
    !Number(idCitizen) ||
    idCitizen === null ||
    UrlDocument === null ||
    documentTitle === null
  ) {
    return response
      .status(501)
      .json(
        "Los datos ingresados no son correctos aseguerese de enviar id, Url y titulo de doumento a Autenticar"
      );
  } else {
    var rerturn_response = `El ciudadado con cedula: ${idCitizen} ha obtenido la autenticación exitosa del documento: ${documentTitle}   [Code: 0001]`;
    return response.status(200).json(rerturn_response);
  }
};

const registerCitizen = (request, response) => {
  var { id, name, address, email, operatorId, operatorName } = request.body;
  if (
    !Number(id) ||
    id === null ||
    address === null ||
    email === null ||
    operatorId === null
  ) {
    return response
      .status(501)
      .json(
        "Los datos ingresados no son correctos aseguerese de enviar id, direccion, email,id Operador, Nombre Operador."
      );
  } else {
    var rerturn_response = `Se registro ciudadano con cedula: ${id} en el operador: ${operatorName}   [Code: 0001]`;
    return response.status(200).json(rerturn_response);
  }
};
const unregisterCitizen = (request, response) => {
  var { id,operatorId,operatorName } = request.body;
  if (
    !Number(id) ||
    id === null ||
    operatorName===null||
    operatorId === null
  ) {
    return response
      .status(501)
      .json(
        "Los datos ingresados no son correctos aseguerese de enviar id,id Operador."
      );
  } else {
    var rerturn_response = `Se ha desligado el registro ciudadano con cedula: ${id} en el operador: ${operatorName}   [Code: 0001]`;
    return response.status(200).json(rerturn_response);
  }
};

const initCiticenTransfer=(reuest, response )=>{

}

module.exports = {
  validateCitizen,
  authenticateDocument,
  registerCitizen,
  unregisterCitizen,
  initCiticenTransfer,
};
