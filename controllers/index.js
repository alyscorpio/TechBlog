const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;