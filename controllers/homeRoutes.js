const router = require('express').Router();
const { Post, User, Comment } = require('../models')

router.get('/login', async (req,res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', async (req,res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll({
            order: [[ ' created_at', 'DESC']]
        });

        const blog_posts = postData.map((info) => info.get({ plain: true }));

        res.render('home', {
            blog_posts, logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;