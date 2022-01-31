let fs = require("fs");
let path = require("path");

function treeHelper(dirPath, indent){
    
    //base case of recursion
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile){
        let filename = path.basename(dirPath);
        console.log(indent + "|--" + filename);
    }else{
        //recursive case
        let dirName = path.basename(dirPath);
        console.log(indent + "`--" + dirName);

        let children = fs.readdirSync(dirPath);
        for(let i=0;i<children.length;i++){
            let childPath = path.join(dirPath,children[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}

function treeFn(dirPath) {
   // console.log("This is ", inputArr[0], "coomand");
   if(dirPath==undefined){
       treeHelper(process.cwd(),"");
       //console.log("please enter correct directory path");
   }else{
       let doesExist = fs.readdirSync(dirPath);
       if(doesExist){
           treeHelper(dirPath,"");
       }else{
           console.log("Kindly enter correct path");
       }
   }
}

module.exports = {
    treeKey : treeFn
}