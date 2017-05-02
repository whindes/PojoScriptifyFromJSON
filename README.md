# pojo-deserialize
Node.JS library for deserializing POJO/JSON parsed objects to Javascript code. 

# Dependencies
* object.value 1.0.3


# Installation
```
npm install pojo-deserialize

var pojoJs = new PojoCreator();

var pojo = JSON.parse('{"Hello":"My String Var", "Contents":[1,2,3]}');

var deserializedJsCode = pojoJs.arrayObjectEval(pojo).replace(/,\s*$/, '');

```

# Test
```
npm test
```

# Documentation
API documentation can be found at https://github.com/whindes/PojoScriptifyFromJSON/Readme.md

# Implementation Notes
* Supports browser or Node.js implementations

