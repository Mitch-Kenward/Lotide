const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const words = ["bright", "Lighthouse", "Labs"];
  it("returns 3 for words.length", () => {
    assert.strictEqual((words.length), 3);
  });
  it("returns 2 for tail(words).length", () => {
    assert.strictEqual(tail(words).length, 2);
  });
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
});


//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result.length, 2); // ensure we get back two elements
//assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
//assertEqual(result[1], "Labs"); // ensure second element is "Labs"

module.exports = tail;