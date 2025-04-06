    const registerTransferEndPoint= ( request, response )=>{
        return response.status(201).json("Endpoint Registrado exitosamente.");
    }
   const registerOperator= ( request, response )=>{
    return response.status(201).json("123");

    } 
 const getOperators=(request, response) =>{
    return response.status(200).json([{OperatorId:123,
                                        OperatorName:"Operador 123",
                                        transferAPIURL:"http://mioperador.com/api/transferCitizen"},
                                        {OperatorId:456,
                                        OperatorName:"Operador 456",
                                        transferAPIURL:"http://mioperador.com/api/transferCitizen"},
                                        {OperatorId:789,
                                        OperatorName:"Operador 789",
                                        transferAPIURL:"http://mioperador.com/api/transferCitizen"}]);
                                    }
    module.exports = {
        registerTransferEndPoint,
        registerOperator,
        getOperators
    }