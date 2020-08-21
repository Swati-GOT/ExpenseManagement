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

category.updateCategory = async(categoryData,id) =>{
    try{
        //console.log(".......",categoryData,id);
        delete categoryData.id
        console.log(".......",categoryData,id);
        let result = await models.category.update(categoryData,{where:{id:id}})
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve,reject) =>{resolve(error);})
    }
}

module.exports = category

