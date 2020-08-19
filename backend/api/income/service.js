const income = require('./controller')
let service = {}

service.addIncome = async(request,response) =>{
    try{
        let result = await income.addIncome(request.body)
        sendResponse(200,result,'Data Created Sucessfully',response)
    }catch(error){
        sendResponse(500, error, 'Internal server error', response)
    }
}

service.viewIncome = async(request,response) =>{
    try{
        let result = await income.viewIncome()
        sendResponse(200,result,'Data Created Sucessfully',response)
    }catch(error){
        sendResponse(500, error, 'Internal server error', response)
    }
}

let sendResponse = (code, result,message, response) => {
    response.status(code).send({
        code: code,
        message: '',
        data: (code != 200) ? { error: result.message, stack: result.stack } : result
    });
};

module.exports = service