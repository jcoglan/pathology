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
  
  describe("text()", function() {
    it("filters by node text", function() {
      assertNodesMatch( ["label-male"], "//label[text() = 'Male']" )
      assertNodesMatch( ["em"], "//*[text() = 'title']" )
    })
    
    it("returns the value of the first text node", function() {
      assertNodesMatch( ["first-heading"], "//h1[text() = 'The ']" )
    })
    
    it("does not return the entire text of the node", function() {
      assertNodesMatch( [], "//h1[text() = 'The title']" )
    })
  })
})

