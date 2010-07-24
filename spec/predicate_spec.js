PredicateSpec = JS.Test.describe("Predicate blocks", function() {
  include(Pathology.SpecHelper)
  
  describe("with an attribute with no value", function() {
    it("matches elements with that attribute", function() {
      assertNodesMatch( ["gender-female"], "//input[@checked]" )
    })
  })
  
  describe("with a negated attribute with no value", function() {
    it("matches elements without that attribute", function() {
      assertNodesMatch( ["gender-male"], "//input[not(@checked)]" )
    })
  })
})

