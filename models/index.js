// import all models
const Post = require('./Post');
const User = require('./User');
const enjoy = require('./Enjoy');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

User.belongsToMany(Post, {
    through: enjoy,
    as: 'enjoy_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: enjoy,
    as: 'enjoy_posts',
    foreignKey: 'post_id'
});

enjoy.belongsTo(User, {
    foreignKey: 'user_id'
});

enjoy.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(enjoy, {
    foreignKey: 'user_id'
});

Post.hasMany(enjoy, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, enjoy, Comment };