LogicSpec = JS.Test.describe("Logic within predicates", function() { with(this) {
  include(Pathology.SpecHelper)
  
  describe("equality comparison", function() { with(this) {
    it("matches the element with the required ID", function() { with(this) {
      assertNodesMatch( ["section-div"], "//div[@id='section-div']" )
    }})
  }})
  
  describe("inequality comparison", function() { with(this) {
    it("matches the element without the required ID", function() { with(this) {
      assertNodesMatch( ["gender-male"], '//fieldset/input[ @id != "gender-female" ]' )
    }})
  }})
  
  describe("or", function() { with(this) {
    it("matches if the first condition is true", function() { with(this) {
      assertNodesMatch( ["first-para"], "//p[text() = 'First paragraph' or @id = 'nothing']" )
    }})
    
    it("matches if the second condition is true", function() { with(this) {
      assertNodesMatch( ["first-para"], "//p[text() = 'No match' or @id = 'first-para']" )
    }})
    
    it("matches if both conditions are true", function() { with(this) {
      assertNodesMatch( ["first-para", "second-para"], "//p[text() = 'Some content' or @id = 'first-para']" )
    }})
    
    it("does not match if neither condition is true", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'First' or @id = 'nothing']" )
    }})
    
    describe("complex or query with functions", function() { with(this) {
      it("matches nodes for which any of the conditions are true", function() { with(this) {
        assertNodesMatch( ["link1", "link2", "link3"], "//a[@href][@id='Show Status' or contains(.,'Show Status') or contains(@title,'Show Status') or img[contains(@alt,'Show Status')]]" )
      }})
    }})
  }})
  
  describe("and", function() { with(this) {
    it("matches if both conditions are true", function() { with(this) {
      assertNodesMatch( ["second-para"], "//p[text() = 'Some content' and @id='second-para']" )
    }})
    
    it("does not match if the first condition is false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'Some' and @id='second-para']" )
    
    }})
    
    it("does not match if the second condition is false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'Some content' and @id='para']" )
    }})
    
    it("does not match if both conditions are false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'content' and @id='para']" )
    }})
    
    describe("complex and query using attributes", function() { with(this) {
      it("matches the input for which all the conditions are true", function() { with(this) {
        assertNodesMatch( ["text-input", "text-field", "form_last_name", "form_name"], "//form/input[not(@type) or (@type!='radio' and @type!='checkbox' and @type!='hidden')]" )
      }})
    }})
  }})
  
  describe("finding the input for a label", function() { with(this) {
    it("uses a subquery", function() { with(this) {
      assertAttributesMatch( ["gender-female"], "//label[text()='Female']/@for" )
      assertNodesMatch( ["gender-female"], "//input[@id=//label[text()='Female']/@for]" )
    }})
  }})
  
  describe("finding a select with several things selected", function() { with(this) {
    it("uses the @selected and text() attributes across node sets", function() { with(this) {
      assertNodesMatch( ["form_underwear"],
                        ".//select[((./@id = 'Underwear' or ./@name = 'Underwear') or ./@id = //label[contains(./text(), 'Underwear')]/@for)][.//option[./@selected]/text() = 'Briefs'][.//option[./@selected]/text() = 'Commando']" )
    }})
  }})
  
  describe("finding inputs by name", function() { with(this) {
    it("uses a comparator with a multi-valued RHS", function() { with(this) {
      assertNodesMatch( ["form_first_name", "form_last_name", "form_name_explanation", "form_name"],
                        ".//*[self::input | self::textarea][((./@id = 'Name' or ./@name = 'Name') or ./@id = //label[contains(normalize-space(string(.)), 'Name')]/@for)] | .//label[contains(normalize-space(string(.)), 'Name')]//.//*[self::input | self::textarea]" )
    }})

    it("should not match too many nodes", function() { with(this) {
      assertNodesMatch( [], "//label[contains(normalize-space(string(.)), 'form_pets_cat')]" )
      assertNodesMatch( ["form_pets_cat"],
                        ".//*[self::input | self::textarea | self::select][((./@id = 'form_pets_cat' or ./@name = 'form_pets_cat') or ./@id = //label[contains(normalize-space(string(.)), 'form_pets_cat')]/@for)]" )
    }})
  }})
}})

