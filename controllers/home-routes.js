const router = require('express').Router();

// Routing to the "homepage.handlebars" file
router.get('/', (req, res) => {
    res.render('homepage', {
        id: 1,
        post_url: 'https://handlebarsjs.com/guide/',
        title: 'Handlebars Docs',
        created_at: new Date(),
        like_count: 2,
        comments: [{}, {}],
        user: {
            username: 'test'
        }
    });
});

module.exports = router;