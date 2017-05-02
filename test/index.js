var expect = require("expect.js");
var PojoCreator = require("./lib");

describe('POJO-Deserializer Lib', function () {
    var parsedJSON = JSON.parse('{"Hello":"My String Var", "Contents":[1,2,3]}');

    var expectedString = "{ Hello: 'My String Var', Contents:[1,2,3] }";

    var pojoCreator = new PojoCreator();

    it('Should deserialize a stringified object that is JSON.parsed.', function () {
        expect(pojoCreator.arrayObjectEval(parsedJSON).replace(/,\s*$/, '')).to.eql(expectedString);
    });


});