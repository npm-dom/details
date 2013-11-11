var test = require("tape")

var details = require("../index.js")

test("details is a function", function (assert) {
    assert.equal(typeof details, "function")
    assert.end()
})

