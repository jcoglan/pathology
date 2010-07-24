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
  
  describe("with an equality comparison", function() {
    it("matches the element with the required ID", function() {
      assertNodesMatch( ["section-div"], "//div[@id='section-div']" )
    })
  })
  
  describe("with an inequality comparison", function() {
    it("matches the element without the required ID", function() {
      assertNodesMatch( ["gender-male"], '//input[ @id != "gender-female" ]' )
    })
  })
})

