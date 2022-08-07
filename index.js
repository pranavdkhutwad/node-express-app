// Middleware Types:
// 1. Custom Middleware
// 2. Built-in Middleware
// 3. Third-party Middleware
const express = require('express');
const morgan = require('morgan');
const devLog = require('debug')('app:dev');
const prodLog = require('debug')('app:prod');
const config = require('config');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const students = require('./routes/students');

const app = express();

app.set('view engine', 'pug');

// this is default value in express
app.set('views', './views');

// Built-in
// to convert body into json object
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Third-party
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
}
console.log(config.get('name'));
console.log(config.get('user.password'));
devLog('Before using logger middleware');

// Custom
app.use(logger);
app.use('/', home);
app.use('/api/students', students);



const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Listening on port ${port}`));
