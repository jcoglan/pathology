AttributeSpec = JS.Test.describe("Attribute selectors", function() {
  include(Pathology.SpecHelper)
  
  describe("with a matching node with the attribute", function() {
    it("returns one attribute node", function() {
      assertAttributesMatch( ["first-para"], "//body/p/@id" )
      assertAttributesMatch( ["first-para"], "//body/p/attribute::id" )
    })
  })
})

