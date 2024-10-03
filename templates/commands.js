console.clear();

//* Importing lib, modules and other stuffs
const globalVariables = require('../config/globalVariables');
const templates = require('./templates');
const fs=require("fs");

//* Extracting Command Arguments
const arguments = process.argv;
const requiredArguments = arguments.splice(2).toString();
const firstSplit = requiredArguments.split(':');
const type = firstSplit[0];

//* Finding the module type of file to be created
let filePath = "";
if(type == 'database') filePath = globalVariables.DATABASE_DIR_PATH;
else if(type == 'controller') filePath = globalVariables.CONTROLLER_DIR_PATH;
else if(type == 'model') filePath = globalVariables.MODELS_DIR_PATH;
else if(type == 'route') filePath = globalVariables.ROUTES_DIR_PATH;
else if(type == 'view') filePath = globalVariables.VIEWS_DIR_PATH;


//* Finding the construction type of file to be created
const fileName = firstSplit[1];
const fullFileName = filePath + "/" + fileName + ".js";
let fileSegments = fileName.split('_');

//* Creating that Requested File
if(type == 'database')
{
    let dbFileType = fileSegments[0];
    if(dbFileType == 'create')
        {
            console.log(fullFileName);
            fs.open(fullFileName, 'a', function(err, fd) {
                if(err) { 
                    console.log('Cant open file'); 
                }else {
                    let fileData = Buffer.from(templates.createTableTemplate(fileSegments[1]));
                    fs.write(fd, fileData, 0, fileData.length, null, function(err, writtenbytes) { 
                        if(err) { 
                            console.log('Cant write to file'); 
                        }else { 
                            console.log(writtenbytes + 
                                ' characters added to file');
                            
                            fs.close(fd, (err) => {
                                if (err) throw err;
                            });
                        } 
                    }); 
                }
            }); 
        };

    if(dbFileType == 'insert')console.log("insert db File type");
    if(dbFileType == 'update')console.log("update db File type");
    if(dbFileType == 'alter')console.log("alter db File type");
    if(dbFileType == 'delete')console.log("delete db File type");    
}

    

