// http: //www.codewars.com/kata/extract-nested-object-reference

Object.prototype.hash = function(string) {
    let strArr = string.split(".");
    let tempObj = this;
    for (let i = 0; i < strArr.length; i++) {\
        tempObj = tempObj[strArr[i]];
        if (tempObj == undefined) {
            return undefined;
        }
    }
    return tempObj;
}
