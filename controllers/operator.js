const operator = require("../models/operators");
//const counter=require("../models/counter");
exports.addOperator =  function (req, res) {
    var { name, address, contactMail, participants } = req.body;
    //seq_value=counter.findByIdAndUpdate();
    var data = { /*operatorId:seq_value,*/ operatorName:name, address, ContactMail:contactMail, participants };
    operator.insertMany(data, function (err, result) {
        if (err)
            if (err.code === 11000)
                res
                    .status(501)
                    .json(
                        `Error al crear operador: ${req.body.name} ya se encuentra registrado en la carpeta ciudadana `
                    );
            else
                res
                    .status(501)
                    .json(
                        `Error al crear Operador: $${req.body.name} Error.Message: ${err.message} `
                    );
        else
            res
                .status(201)
                .json({message:`Operador: ${req.body.name}   Creado exitosamente`,idOperator:result[0]._id}
                    
                );
    });
};

exports.findOperatorById = function (req, res) {
    var id = req.params.id;
    operator.find({ operatorId: id }, function (err, result) {
        if (err) res.status(501).json(`error al consultar`);
        else {
            if (result.length > 0)
                res
                    .status(200)
                    .json(
                        `El Operador ya se encuentra registrado: ${result[0].operatorId} : ${result[0].operatorName} `
                    );
            else res.status(204).send();
        }
    });
};

exports.updateOperator = function (req, res) {
    var { idOperator, endPoint,endPointConfirm  } = req.body;
    operator.findByIdAndUpdate( idOperator, {transferAPIURL: endPoint },{transferAPIURLConfirm: endPointConfirm}, function (err, docs) {
        if (err) res.status(501).json(`error al consultar`);
        else {
                if (docs)
                res
                    .status(200)
                    .json(
                        ` se ha actualizado los datos del Operador : ${docs.operatorName} `
                    );
            else res.status(204).json(`El Operador con id: ${idOperator} no se ha encontrado`);
        }
    });
};
exports.findAllOperators = function (req, res) {
    var id = req.params.id;
    operator.find({},'_id operatorName transferAPIURL transferAPIURLConfirm  participants',function (err, result) {
            if (err) res.status(501).json(`error al consultar`);
        else {
            if (result.length > 0)
                res
                    .status(200)
                    .json(
                        result 
                    );
            else res.status(204).send();
        }
    }).exec();
};