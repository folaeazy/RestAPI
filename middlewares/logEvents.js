const {format} =require('date-fns');
const {v4: uuid} =require('uuid');
const fs =require('fs');
const fsPromises = require('fs').promises;
const path= require('path')



const logEvents = async (message,FileName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\thh:mm:ss')}`;
    const logItem = `${dateTime}\t ${uuid()}\t${message}\n`;
    
    try {
        if (!fs.existsSync(path.join(__dirname,'..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'..','logs'));
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',FileName),logItem);
    } catch (err) {
        console.log(err);
    }
}

module.exports = logEvents;