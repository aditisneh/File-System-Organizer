let fs = require("fs");
let path = require("path");

function organizeFn(dirPath){
    let destPath;
    //console.log("This is ", inputArr[0], "command");
    //1. input -> directory  path is given
    if(dirPath==undefined) {
        destPath = process.cwd();
        //console.log("Path is not valid");
        return;
    }else{
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            //if the file path exists then make a new path
            //2. create -> organised files directory
            destPath = path.join(dirPath,"organisedFiles");
            if(fs.existsSync(destPath)==false){
                //make directory of given path
                console.log("path made")
                fs.mkdirSync(destPath);
            }

        }else{
            console.log("Kindly enter correct path");
            return;
        }
        organiseHelper(dirPath,destPath);
    }
}

function organiseHelper(src,dest){
    //3. identify categories of all files present in that input directory
    let childNames = fs.readdirSync(src);
    
    for(let i = 0;i<childNames.length;i++){
        let childAdd = path.join(src, childNames[i]);
        //if the child address is folder then do nothing, it its a file
        let isFile = fs.lstatSync(childAdd).isFile();
        if(isFile){
            //console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            //console.log(childNames[i]," belongs to -->", category);
            
            //4. cut/copy files to that organised folder
            sendFiles(childAdd,dest, category);
        }
        
    }
}
function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    for(let type in types){
        let cType = types[type];
        for(let i=0;i<cType.length;i++){
            if(ext == cType[i]){
                return type;
            }
        }
    }
    return "Other";
}

function sendFiles(src,dest, category){
    //make category folder
    let categoryPath = path.join(dest, category);
    if(fs.existsSync(categoryPath)==false){
        fs.mkdirSync(categoryPath);
    }
    //make dest path for category files to be copied
    let filename = path.basename(src);
    let destFilePath = path.join(categoryPath, filename);

    //copy
    fs.copyFileSync(src, destFilePath);
    //remove original file
    fs.unlinkSync(src);

    console.log(filename," moved to -->", category)
}

module.exports={
    organizeKey : organizeFn
}