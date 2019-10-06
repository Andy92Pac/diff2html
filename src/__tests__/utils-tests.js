const Utils = require("../utils.js").Utils;

describe("Utils", function() {
  describe("escape", function() {
    it("should escape & with &amp;", function() {
      const result = Utils.escape("&");
      expect("&amp;").toEqual(result);
    });
    it("should escape < with &lt;", function() {
      const result = Utils.escape("<");
      expect("&lt;").toEqual(result);
    });
    it("should escape > with &gt;", function() {
      const result = Utils.escape(">");
      expect("&gt;").toEqual(result);
    });
    it("should escape a string with multiple problematic characters", function() {
      const result = Utils.escape('<a href="#">\tlink text</a>');
      const expected = "&lt;a href=&quot;#&quot;&gt;\tlink text&lt;&#x2F;a&gt;";
      expect(expected).toEqual(result);
    });
  });
});
