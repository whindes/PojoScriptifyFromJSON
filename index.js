function arrayToString(arr) {
    let str = '[';
    for (let i=0; i < arr.length;i++) {
        let parseType = '';
        if (typeof arr[i] === 'object') {
            if (Array.isArray(arr[i])) {
                parseType = arrayToString(arr[i]);
            } else {
                parseType = objToString(arr[i]) + ", ";
            }
        } else {
            parseType = typeof arr[i] === 'string' ? "'" + arr[i] + "', " : arr[i] + ", ";
        }
            
        str += parseType + '\n';
    }
    return str.replace(/,\s*$/, '') + ']';
}

function objToString(obj) {
    let str = '{';
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            let parseType = '';
            if (typeof obj[p] === 'object') {
                if (Array.isArray(obj[p])) {
                    parseType = arrayToString(obj[p]);
                } else {
                    parseType = objToString(obj[p]);
                }
                
            } else {
                parseType = typeof obj[p] === 'string' ? "'" + obj[p] + "', " : obj[p] + ", ";
            }

            str += p + ':' + parseType + '\n';
        }
    }
    return str.replace(/,\s*$/, '') + '}';
}