PathSpec = JS.Test.describe("Path selectors", function() {
  include(Pathology.SpecHelper)
  
  describe("with a single child selector", function() {
    it("matches top-level nodes with the given name", function() {
      assertNodesMatch( ["first-para"], "/html/body/p" )
      assertNodesMatch( ["first-para"], "/child::html/child::body/child::p" )
    })
    
    it("does not match recursively", function() {
      assertNodesMatch( [], "/p" )
      assertNodesMatch( [], "/child::p" )
    })
  })
  
  describe("with a recursive child selector", function() {
    it("matches all nodes with the given name", function() {
      assertNodesMatch( ["first-heading"], "//h1" )
      assertNodesMatch( ["first-heading"], "/descendant-or-self::h1" )
      assertNodesMatch( ["first-heading"], "/descendant-or-self::node()/h1" )
    })
  })
  
  describe("with a parent selector", function() {
    it("selects the parent", function() {
      assertNodesMatch( ["section-div"], "//h1/.." )
      assertNodesMatch( ["section-div"], "//h1/parent::node()" )
    })
  })
  
  describe("with a self selector", function() {
    it("selects the current node", function() {
      assertNodesMatch( ["first-heading"], "//h1/." )
      assertNodesMatch( ["first-heading"], "//h1/self::node()" )
    })
  })
  
  describe("with a predicate containing a relative path", function() {
    it("matches an element with the required child", function() {
      assertNodesMatch( ["section-div"], "//div[h1]" )
    })
  })
  
  describe("text()", function() {
    it("matches text nodes", function() {
      assertTextMatch( ["Male"], "//label[@for='gender-male']/text()" )
    })
  })
})

