const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const { Post, User, Comment, Enjoy } = require('../../models');

router.post('/enjoy', withAuth, (req, res) => {
    Enjoy.create({
            id: req.body.id,
            user_id: req.session.id,
            post_id: req.body.id
        })
        .then(dbEnjoyData => res.json(dbEnjoyData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})

/*
router.put('/enjoy', withAuth, (req, res) => {
    // make sure the session exists first
    // pass session id along with all destructured properties on req.body
    Post.update({...req.body, user_id: req.session.user_id }, { Enjoy, Comment, User })
        .then(updatedEnjoyData => res.json(updatedEnjoyData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
});
*/
module.exports = router;