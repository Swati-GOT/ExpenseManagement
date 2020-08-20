const category = require('./controller')
let service = {}

service.addCategory = async(request,response) =>{
    try{
        let result = await category.addCategory(request.body)
        sendResponse(200,result,'Data Created Sucessfully',response)
    }catch(error){
        sendResponse(500, error, 'Internal server error', response)
    }
}

service.viewCategory = async(request,response) =>{
    try{
        let result = await category.viewCategory()
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