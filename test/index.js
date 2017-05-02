var expect = require("expect.js");
var pojoDeserializer = require("../lib/index");

describe('POJO-Deserializer Lib', function () {
    var parsedJSON = JSON.parse('{"Hello":"My String Var", "Contents":[1,2,3]}');

    var expectedString = "{ Hello: 'My String Var', Contents: [ 1, 2, 3]}";

    var pojoCreator = new pojoDeserializer();

    it('Should deserialize a stringified object that is JSON.parsed.', function () {
        expect(pojoCreator.deserializePojo(parsedJSON)).to.eql(expectedString);
    });


});