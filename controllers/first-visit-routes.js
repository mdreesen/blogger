const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    if (req.session.countVisit) {
        req.session.countVisit++;
        req.session.firstTime = false;
    } else {
        req.session.countVisit = 1;
        req.session.firstTime = true;
    }

    const data = {
        countVisit: req.session.countVisit,
        firstTime: req.session.firstTime
    }
    res.render('first-visit', data);
});

module.exports = router;