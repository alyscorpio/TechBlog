const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// POST
router.post('/', async (req,res) => {
    try {
        const commentData = await Comment.create ({...req.body, user_id:req.session.user_id});
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// // GET
// router.get('/', async (req, res) => {
//     try {
//         const commentData = await Comment.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['id', 'username'],
//                 }
//             ],
//             order: [['created_at', 'DESC']]
//         });

//         const comments = commentData.map((comment) =>
//         comment.get({ plain: true })
//         );
//     } catch (err) {
//         console.log(err) {
//             console.log(err);
//             res.status(500).json(err);
//         }
//     }
// });

module.exports = router;