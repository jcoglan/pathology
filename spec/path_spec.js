PathSpec = JS.Test.describe("Path selectors", function() {
  include(Pathology.SpecHelper)
  
  describe("with a single child selector", function() {
    it("matches top-level nodes with the given name", function() {
      assertDomMatch( ["first-para"], "/html/body/p" )
    })
  })
  
  describe("with a recursive child selector", function() {
    it("matches all nodes with the given name", function() {
      assertDomMatch( ["first-heading"], "//h1" )
    })
  })
})

