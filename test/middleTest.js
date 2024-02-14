const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("returns [2, 3] from [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  })
  it("retuns [2] from [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
})




//assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
//assertArraysEqual(middle([1, 2, 3]), [2]);