PredicateSpec = JS.Test.describe("Predicate blocks", function() {
  include(Pathology.SpecHelper)
  
  describe("with an attribute with no value", function() {
    it("matches elements with that attribute", function() {
      assertNodesMatch( ["gender-female"], "//input[@checked]" )
    })
  })
  
  describe("with a negated attribute with no value", function() {
    it("matches elements without that attribute", function() {
      assertNodesMatch( ["gender-male"], "//fieldset/input[not(@checked)]" )
    })
  })
  
  describe("name()", function() {
    it("filters by node name", function() {
      assertNodesMatch( ["link1", "link2", "link3"], ".//*[name() = 'a']" )
    })
  })
  
  describe("multiple predicates", function() {
    it("match if both conditions are true", function() {
      assertNodesMatch( ["second-para"], "//p[text() = 'Some content'][@id='second-para']" )
    })
    
    it("does not match if the first condition is false", function() {
      assertNodesMatch( [], "//p[text() = 'Some'][@id='second-para']" )
    })
    
    it("does not match if the second condition is false", function() {
      assertNodesMatch( [], "//p[text() = 'Some content'][@id='para']" )
    })
    
    it("does not match if both conditions are false", function() {
      assertNodesMatch( [], "//p[text() = 'content'][@id='para']" )
    })
  })
  
  describe("union operator", function() {
    it("returns the union of two node sets", function() {
      assertNodesMatch( ["first-para", "second-para", "oddly-spaced", "another-p", "link1", "link2", "link3"],
                        ".//*[./@id][self::p | self::a]" )
    })
  })
  
  describe("text()", function() {
    it("filters by node text", function() {
      assertNodesMatch( ["label-male"], "//label[text() = 'Male']" )
      assertNodesMatch( ["em"], ".//*[./text() = 'title']" )
    })
    
    it("returns the value of the first text node", function() {
      assertNodesMatch( ["first-heading"], "//h1[text() = 'The ']" )
    })
    
    it("does not return the entire text of the node", function() {
      assertNodesMatch( [], "//h1[text() = 'The title']" )
    })
  })
  
  describe("concat()", function() {
    it("joins strings together", function() {
      assertNodesMatch( ["first-heading"], "//h1[text() = concat('T',\"he\",' ')]" )
    })
  })
  
  describe("contains()", function() {
    it("matches if the first piece of text contains the second", function() {
      assertNodesMatch( ["label-male", "label-female"], "//label[contains(text(),'ale')]" )
    })
    
    it("allows a . to get the node's full text", function() {
      assertNodesMatch( ["label-male", "label-female"], "//label[contains(.,'ale')]" )
      assertNodesMatch( ["first-heading"],"//h1[contains(.,'The title')]" )
    })
    
    it("does not match if the first piece of text does not contain the second", function() {
      assertNodesMatch( [], "//label[contains(text(),'Fail')]" )
      assertNodesMatch( [], "//h1[contains(text(),'The title')]" )
    })
    
    it("matches if normalize-space is used", function() {
      assertNodesMatch( ["oddly-spaced"], "//p[contains(normalize-space(.),'Text with double spacing')]" )
    })
  })
})

