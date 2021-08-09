const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where:{
                user_id: req.session.user_id
            },
            include: [
                { model: User }, 
                { model: Comment }
            ]
        });
        console.log(postData);
        
        const posts = postData.map(post=>post.get({plain:true}));
        console.log(posts);
        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                { model: User }
            ]
        });
        console.log(postData);
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('edit', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit', async (req, res) => {
    try {
      res.render('edit');
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
