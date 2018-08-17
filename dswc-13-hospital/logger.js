const fs = require('fs');

function log(message) {
    const timestamp = new Date();
    message = `[${timestamp.getDate()}.${timestamp.getMonth()}.${timestamp.getFullYear()}. ` + 
                `${timestamp.getHours()}:${timestamp.getMinutes()}] ${message}\n`;

    fs.appendFile('hospital.log', message, (err) => {  
        if (err) throw err;
    });
}

module.exports = { log };