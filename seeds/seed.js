const sequelize = require('../config/connection');
const { Post } = require('../models');

const postSeedData = require('./post-seeds.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Post.bulkCreate(postSeedData, {
        individualHooks: true,
        returning: true,
    });
    console.log('\n----- SAMPLE BLOG -----\n');

    process.exit(0);
};

seedDatabase();
