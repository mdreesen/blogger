// dependencies
const express = require('express');
const sequelize = requre('./config/connection.js');
const path = require('path');
const session = require('express-session');
const sequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

// adding the sess here for user sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
    // app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
// app.use(routes);

// connect to handlebars engine
app.engine('handlebars', dbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});