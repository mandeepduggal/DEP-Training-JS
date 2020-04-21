const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

function getSha1AndMD5(data) {
    let sha = crypto.createHash('sha1').update(data.toString()).digest('hex');
    let md5 = crypto.createHash('md5').update(data.toString()).digest('hex');
    return sha + "     " + md5;
}

dirPath = process.argv.slice(2);

if (fs.statSync(dirPath[0]).isFile()) {
    getFileDetail(dirPath[0]);
} else {
    readDir(dirPath[0]);

}

function readDir(pathName) {
    let files = fs.readdirSync(pathName);
    if (files.length != 0) {
        files.forEach(function(file) {
            filepath = path.join(pathName, file);
            if (fs.statSync(filepath).isFile()) {
                fs.appendFileSync("demo_new.md", filepath + "   " + getFileDetail(filepath) + "\n");
            } else {
                readDir(filepath);
            }
        });
    }
}

function getFileDetail(fileName) {
    let response = fs.readFileSync(fileName).toString()
    return getSha1AndMD5(response);
}
