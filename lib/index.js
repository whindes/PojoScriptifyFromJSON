
//
// Requires dependencies for node
//
if (typeof module !== 'undefined' && module.exports) {
    var _values = require('object.values');
}

(function(){
'use static';

var PojoCreator = function (){
  
  
}

PojoCreator.prototype.arrayObjectEval = arrayObjectEval;


function arrayToString(arr) {
    let str = '[ ';
    for (let i=0; i < arr.length;i++) { 
        str += arrayObjectEval(arr[i]) + '\n';
    }
    return str.replace(/,\s*$/, '') + '],';
}

function objToString(obj) {
    let str = '{ ';
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) { 
            str += p + ': ' + arrayObjectEval(obj[p]) + '\n';
        }
    }
    return str.replace(/,\s*$/, '') + '},';
}

function arrayObjectEval(parseItem){
    if (typeof parseItem === 'object') {
        if (Array.isArray(parseItem)) {
            return arrayToString(parseItem);
        } else {
            return objToString(parseItem);
        }
        
    } else {
       return typeof parseItem === 'string' 
                        ? "'" + parseItem + "', " 
                        : parseItem + ", ";
    }
}

//
// Node
//    
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Commission;
}
//
// Browser
//
else {
    window.PojoCreator = PojoCreator;
}

})();
