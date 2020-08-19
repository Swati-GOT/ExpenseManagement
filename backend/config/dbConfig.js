const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:root@localhost:3306/expensedb')

const modelDefiners = [
	require('../common/models/income.model'),
	require('../common/models/category.model'),
	require('../common/models/expense.model'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

sequelize.sync();

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
