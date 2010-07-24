PathSpec = JS.Test.describe("Path selectors", function() {
  include(Pathology.SpecHelper)
  
  describe("with a single child selector", function() {
    it("matches top-level nodes with the given name", function() {
      assertDomMatch( ["first-para"], "/html/body/p" )
      assertDomMatch( ["first-para"], "/child::html/child::body/child::p" )
    })
    
    it("does not match recursively", function() {
      assertDomMatch( [], "/p" )
      assertDomMatch( [], "/child::p" )
    })
  })
  
  describe("with a recursive child selector", function() {
    it("matches all nodes with the given name", function() {
      assertDomMatch( ["first-heading"], "//h1" )
      assertDomMatch( ["first-heading"], "/descendant-or-self::h1" )
      assertDomMatch( ["first-heading"], "/descendant-or-self::node()/h1" )
    })
  })
})

