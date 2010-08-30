LogicSpec = JS.Test.describe("Logic within predicates", function() {
  include(Pathology.SpecHelper)
  
  describe("equality comparison", function() {
    it("matches the element with the required ID", function() {
      assertNodesMatch( ["section-div"], "//div[@id='section-div']" )
    })
  })
  
  describe("inequality comparison", function() {
    it("matches the element without the required ID", function() {
      assertNodesMatch( ["gender-male"], '//fieldset/input[ @id != "gender-female" ]' )
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
    
    describe("complex or query with functions", function() {
      it("matches nodes for which any of the conditions are true", function() {
        assertNodesMatch( ["link1", "link2", "link3"], "//a[@href][@id='Show Status' or contains(.,'Show Status') or contains(@title,'Show Status') or img[contains(@alt,'Show Status')]]" )
      })
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
    
    describe("complex and query using attributes", function() {
      it("matches the input for which all the conditions are true", function() {
        assertNodesMatch( ["text-input", "text-field"], "//form/input[not(@type) or (@type!='radio' and @type!='checkbox' and @type!='hidden')]" )
      })
    })
  })
  
  describe("finding the input for a label", function() {
    it("uses a subquery", function() {
      assertAttributesMatch( ["gender-female"], "//label[text()='Female']/@for" )
      assertNodesMatch( ["gender-female"], "//input[@id=//label[text()='Female']/@for]" )
    })
  })
  
  describe("finding a select with several things selected", function() {
    it("can use labels and the @selected attribute", function() {
      assertNodesMatch( ["form_underwear"],
                        ".//select[((./@id = 'Underwear' or ./@name = 'Underwear') or ./@id = //label[contains(./text(), 'Underwear')]/@for)][.//option/text() = 'Commando']" )
    })
  })
})

