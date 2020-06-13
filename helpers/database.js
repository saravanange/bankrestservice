const mongoose = require('mongoose');
const fs = require('fs');
const localStr = 'mongodb://localhost:27017/ModelBankDB';

/*
 * DB Connection string
 */
module.exports = {
    init: env =>{
        let connStr = localStr;
        let options = {
            useNewUrlParser: true,
        };
         if (env === 'PROD') {
            const certFileBuf = fs.readFileSync('./rds-.pem');
            connStr = prodStr;
            options.sslCA = certFileBuf;
        }
        // Create the database connection 
        mongoose.connect(connStr,options); 

        // CONNECTION EVENTS
        // When successfully connected
        mongoose.connection.on('connected', function () {
        }); 
        
        // If the connection throws an error
        mongoose.connection.on('error',function (err) { 
        }); 

        // When the connection is disconnected
        mongoose.connection.on('disconnected', function () { 
        });

        // If the Node process ends, close the Mongoose connection 
        process.on('SIGINT', function() {   
            mongoose.connection.close(function () { 
                process.exit(0); 
            }); 
        }); 

    }


}