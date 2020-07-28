var assert = require("assert");
const { argv } = require("../command-line");

describe("Command line testing", function () {
  it("default port option should be 5000", function () {
    // argv.port = "abcd";
    assert.equal(argv.port, 5000);
  });
});
