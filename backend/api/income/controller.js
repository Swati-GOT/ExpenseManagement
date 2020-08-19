const {models} = require('../../config/dbConfig');

let income = {}

income.addIncome = async(incomeData) =>{
    try{
        console.log(incomeData);
        let result = await models.income.create(incomeData)
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
};

income.viewIncome = async() =>{
    try{
        let result = await models.income.findAll()
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
}

module.exports = income

