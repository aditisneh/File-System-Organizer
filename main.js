let treeObj = require("./Commands/tree");
let helpObj = require("./Commands/help");
let organiseObj = require("./Commands/organize");


///slice the initial two words ie node and file name
let inputArr = process.argv.slice(2);

let command = inputArr[0];

let types = {
    videos : ["mp4","mkv"],
    architecture : ["zip","rar","tar","gz","ar","iso","xz"],
    documents : ["xls","xlsx","doc","docx","pdf","odt","odp","txt","ps"],
    app : ["exe","dog","pkg","dcb"],
    img : ["png","jpeg","jpg"]
}

switch(command) {
    case "tree":
            treeObj.treeKey(inputArr[1]);
            break;
    case "organize" :
            organiseObj.organizeKey(inputArr[1]);
            break;
    case "help" :
            helpObj.helpKey(inputArr[1]);
            break;
    default:
        console.log("Please enter right input command");
        break;
}