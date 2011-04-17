PathSpec = JS.Test.describe("Path selectors", function() { with(this) {
  include(Pathology.SpecHelper)
  
  describe("with a single child selector", function() { with(this) {
    it("matches top-level nodes with the given name", function() { with(this) {
      assertNodesMatch( ["first-para"], "/html/body/p" )
      assertNodesMatch( ["first-para"], "/child::html/child::body/child::p" )
    }})
    
    it("does not match recursively", function() { with(this) {
      assertNodesMatch( [], "/p" )
      assertNodesMatch( [], "/child::p" )
    }})
  }})
  
  describe("with a recursive child selector", function() { with(this) {
    it("matches all nodes with the given name", function() { with(this) {
      assertNodesMatch( ["first-heading", "second-heading"], "//h1" )
      assertNodesMatch( ["first-heading", "second-heading"], "/descendant-or-self::h1" )
      assertNodesMatch( ["first-heading", "second-heading"], "/descendant-or-self::node()/h1" )
    }})
  }})
  
  describe("with a parent selector", function() { with(this) {
    it("selects the parent", function() { with(this) {
      assertNodesMatch( ["section-div", "another-div"], "//h1/.." )
      assertNodesMatch( ["section-div", "another-div"], "//h1/parent::node()" )
    }})
  }})
  
  describe("with a self selector", function() { with(this) {
    it("selects the current node", function() { with(this) {
      assertNodesMatch( ["first-heading", "second-heading"], "//h1/." )
      assertNodesMatch( ["first-heading", "second-heading"], "//h1/self::node()" )
    }})
  }})
  
  describe("with a predicate containing a relative path", function() { with(this) {
    it("matches an element with the required child", function() { with(this) {
      assertNodesMatch( ["section-div", "another-div"], "//div[h1]" )
    }})
  }})
  
  describe("with a predicate containing a recursive relative path", function() { with(this) {
    it("matches an element with the required descendant", function() { with(this) {
      assertNodesMatch( ["section-div"], "//div[.//em]" )
    }})
  }})
  
  describe("text()", function() { with(this) {
    it("matches text nodes", function() { with(this) {
      assertTextMatch( ["Male"], "//label[@for='gender-male']/text()" )
    }})
  }})
  
  describe("union operator", function() { with(this) {
    it("returns the union of two node sets", function() { with(this) {
      assertNodesMatch( ["first-para", "second-para", "oddly-spaced", "another-p", "link1", "link2", "link3"],
                        ".//p[./@id] | .//a" )
    }})
  }})
}})

