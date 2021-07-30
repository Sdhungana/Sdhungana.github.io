describe("Prototype", () => {
  describe("Filter", () => {
    it("should return 'This house is nice!'", () => {
      assert.equal(
        "This house is not nice!".filter(["not"]),
        "This house is nice!"
      );
    });
  });
  describe("Bubble Sort", () => {
    it("should return [-2, 0, 1, 3, 4, 6]", () => {
      assert.deepEqual([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
  });
});
