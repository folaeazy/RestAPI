const logEvents = require("../middlewares/logEvents");

const logger = (req,res,next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`,'reqlog.txt');
    console.log(`${req.method}\t${req.url}`);
    next();
}



const errorHandler = (err,req,res,next) => {
    logEvents(`${err.name}: ${err.message}`, 'errlog.txt');
    console.error(err.stack);
    res.status(500).send(err.message); 
    
}


module.exports = { logger, errorHandler};