const {models} = require('../../config/dbConfig');

let category = {}

category.addCategory = async(categoryData) =>{
    try{
        console.log(categoryData);
        let result = await models.category.create(categoryData)
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
};

category.viewCategory = async() =>{
    try{
        let result = await models.category.findAll()
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
}

module.exports = income

