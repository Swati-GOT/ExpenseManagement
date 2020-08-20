const {models} = require('../../config/dbConfig');

let expense = {}

expense.addExpense = async(expenseData) =>{
    try{
        console.log(expenseData);
        let result = await models.expense.create(expenseData)
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
};

expense.viewExpense = async() =>{
    try{
        let result = await models.expense.findAll()
        return new Promise((resolve, reject) => { resolve(result); });
    }catch(error){
        return new Promise((resolve, reject) => { reject(error); });
    }
}

module.exports = expense

