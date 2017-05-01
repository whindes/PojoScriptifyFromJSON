# PojoScriptifyFromJSON

Example:
let jsonParsed = JSON.parse('{ "hello": { "world" : "parsed", "success": true, "noerror": 0, "count":[{ "one" : 1},{ "one" : 2}]}}');

let jsCode = objToString(jsonParsed);