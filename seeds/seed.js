const sequelize = require('../config/connection');
const { Post } = require('../models');

const postSeedData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Post.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- Sample blog -----\n');

    process.exit(0);
};

seedDatabase();
