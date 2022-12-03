let assert = chai.assert;

describe("Test 0: testing the working of the testrunner", function(){

    it("should return 'hello' from the test function in the webapp .js file", function(){
        assert.equal(testing(),"hello");
    })
})

describe("Test 1: the 'sign' global variable is not predefined", function(){

    it("Should be undefined", function(){
        assert.notExists(sign, "should be undefined");
    })
})

describe("Test 2: The bdayToSign() function always returns a valid sign value for month and day inputs within the valid input space (random month + day testing)", function(){
    
    it("Testing for 2000 random month + day combinations", function(){
        var signs = ["aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"];
        for(let i = 0; i < 2000; i++) {
            let month = Math.floor(Math.random() * 12);
            let day = Math.ceil(Math.random() * 31);

            let randomBdaySign = bdayToSign(month, day);
            assert.isTrue(signs.includes(randomBdaySign), "false: not equal to a valid sign");
        }

    })
})
