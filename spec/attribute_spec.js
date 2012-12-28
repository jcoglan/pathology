AttributeSpec = JS.Test.describe("Attribute selectors", function() { with(this) {
  include(Pathology.SpecHelper)

  describe("with a matching node with the attribute", function() { with(this) {
    it("returns one attribute node", function() { with(this) {
      assertAttributesMatch( ["first-para"], "//body/p/@id" )
      assertAttributesMatch( ["first-para"], "//body/p/attribute::id" )
    }})
  }})
}})

