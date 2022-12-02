let assert = chai.assert;

describe("testing the working of the testrunner", function(){
    var result = testing();

    it("Test 1: hello retun", function(){
        assert.exists(result,"the return value is not null or undefined");
    })
})
describe("Test2: the mode of entering should be undefined unless chosen by user ", function(){
    var dsign = chngMode();

    it("Testing the existance of sign ", function(){
        assert.notExists(dsign, "should not exist");

    })
})
describe("Test3: the sign is not predefined", function(){
    var tsign = data();

    it("Testing the existance of sign ", function(){
        assert.Exists(tsign, "sign does not exists");

    })
})

