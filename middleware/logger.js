const log = (req, res, next) => {
    // logic goes here...
    console.log('Logging...');
    next();
};

module.exports = log;
