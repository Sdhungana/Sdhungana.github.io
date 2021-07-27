describe("Functional Programming & MochChai Test", () => {
  describe("Multiplication Test", () => {
    it("should return 6", () => {
      assert.equal(multiply([1, 2, 3]), 6);
    });
  });
  describe("String Reversal Test", () => {
    it('should return "edoc"', () => {
      assert.equal(reverse("code"), "edoc");
    });
  });
  describe("Filter Words Test", () => {
    it('should return ["Computer","skill"] i.e words whose length > 4', () => {
      assert.deepEqual(
        filterLongWords(["Computer", "skill", "car", "java"], 4),
        ["Computer", "skill"]
      );
    });
  });
});
