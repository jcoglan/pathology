LogicSpec = JS.Test.describe("Logic within predicates", function() {
  include(Pathology.SpecHelper)
  
  describe("equality comparison", function() {
    it("matches the element with the required ID", function() {
      assertNodesMatch( ["section-div"], "//div[@id='section-div']" )
    })
  })
  
  describe("inequality comparison", function() {
    it("matches the element without the required ID", function() {
      assertNodesMatch( ["gender-male"], '//input[ @id != "gender-female" ]' )
    })
  })
  
  describe("or", function() {
    it("matches if the first condition is true", function() {
      assertNodesMatch( ["first-para"], "//p[text() = 'First paragraph' or @id = 'nothing']" )
    })
    
    it("matches if the second condition is true", function() {
      assertNodesMatch( ["first-para"], "//p[text() = 'No match' or @id = 'first-para']" )
    })
    
    it("matches if both conditions are true", function() {
      assertNodesMatch( ["first-para", "second-para"], "//p[text() = 'Some content' or @id = 'first-para']" )
    })
    
    it("does not match if neither condition is true", function() {
      assertNodesMatch( [], "//p[text() = 'First' or @id = 'nothing']" )
    })
  })
  
  describe("and", function() {
    it("matches if both conditions are true", function() {
      assertNodesMatch( ["second-para"], "//p[text() = 'Some content' and @id='second-para']" )
    })
    
    it("does not match if the first condition is false", function() {
      assertNodesMatch( [], "//p[text() = 'Some' and @id='second-para']" )
    
    })
    
    it("does not match if the second condition is false", function() {
      assertNodesMatch( [], "//p[text() = 'Some content' and @id='para']" )
    })
    
    it("does not match if both conditions are false", function() {
      assertNodesMatch( [], "//p[text() = 'content' and @id='para']" )
    })
  })
})

