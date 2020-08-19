module.exports = (app) =>{

    app.use('/api/income',require('./api/income'))
    // app.use('/api/category',require('./api/category'))
    // app.use('/api/expense',require('./api/expense'))
    // app.use('/api/dashboard',require('./api/dashboard'))
}