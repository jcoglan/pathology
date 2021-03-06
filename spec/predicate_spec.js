PredicateSpec = JS.Test.describe("Predicate blocks", function() { with(this) {
  include(Pathology.SpecHelper)

  describe("with an attribute with no value", function() { with(this) {
    it("matches elements with that attribute", function() { with(this) {
      assertNodesMatch( ["form_pets_dog", "form_pets_hamster", "gender-female"], "//input[@checked]" )
    }})
  }})

  describe("with a negated attribute with no value", function() { with(this) {
    it("matches elements without that attribute", function() { with(this) {
      assertNodesMatch( ["gender-male"], "//fieldset/input[not(@checked)]" )
    }})
  }})

  describe("for string attributes", function() { with(this) {
    it("considers an empty attribute to be true", function() { with(this) {
      assertNodesMatch( ["first-empty", "second-empty"], "//div[@class='section']/*[@class]" )
    }})

    it("considers a missing attribute to be false", function() { with(this) {
      assertNodesMatch( ["first-heading", "second-para", "oddly-spaced"], "//div[@class='section']/*[not(@class)]" )
    }})
  }})

  describe("for child node values", function() { with(this) {
    it("matches on an option element's text", function() { with(this) {
      assertNodesMatch( ["form_underwear"], ".//select[.//option = 'Boxers']" )
    }})

    it("matches on an paragraph's text", function() { with(this) {
      assertNodesMatch( ["section-div"], ".//div[.//p = 'Some content']" )
    }})
  }})

  describe("selection by index", function() { with(this) {
    it("finds nodes using a 1-based index", function() { with(this) {
      assertNodesMatch( ["link1"], ".//form//a[1]" )
      assertNodesMatch( ["link2"], ".//form//a[2]" )
      assertNodesMatch( ["link4"], ".//form//a[4][contains(text(), 'hey')]" )
      assertNodesMatch( [],        ".//form//a[3][contains(text(), 'hey')]" )
      assertNodesMatch( ["link4"], ".//form//a[contains(text(), 'hey')][3]" )
    }})
  }})

  describe("name()", function() { with(this) {
    it("filters by node name", function() { with(this) {
      assertNodesMatch( ["link1", "link2", "link3", "link4"], ".//*[name() = 'a']" )
    }})
  }})

  describe("multiple predicates", function() { with(this) {
    it("match if both conditions are true", function() { with(this) {
      assertNodesMatch( ["second-para"], "//p[text() = 'Some content'][@id='second-para']" )
    }})

    it("does not match if the first condition is false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'Some'][@id='second-para']" )
    }})

    it("does not match if the second condition is false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'Some content'][@id='para']" )
    }})

    it("does not match if both conditions are false", function() { with(this) {
      assertNodesMatch( [], "//p[text() = 'content'][@id='para']" )
    }})
  }})

  describe("union operator", function() { with(this) {
    it("returns the union of two node sets", function() { with(this) {
      assertNodesMatch( ["first-para", "second-para", "oddly-spaced", "another-p", "link1", "link2", "link3", "link4"],
                        ".//*[./@id][self::p | self::a]" )
    }})
  }})

  describe("string()", function() { with(this) {
    it("finds the input with the given string content", function() { with(this) {
      assertNodesMatch( ["second-para"], ".//*[string(.) = 'Some content']" )
    }})
  }})

  describe("text()", function() { with(this) {
    it("filters by node text", function() { with(this) {
      assertNodesMatch( ["label-male"], "//label[text() = 'Male']" )
      assertNodesMatch( ["em"], ".//*[./text() = 'title']" )
    }})

    it("returns the value of the first text node", function() { with(this) {
      assertNodesMatch( ["first-heading"], "//h1[text() = 'The ']" )
    }})

    it("does not return the entire text of the node", function() { with(this) {
      assertNodesMatch( [], "//h1[text() = 'The title']" )
    }})
  }})

  describe("concat()", function() { with(this) {
    it("joins strings together", function() { with(this) {
      assertNodesMatch( ["first-heading"], "//h1[text() = concat('T',\"he\",' ')]" )
    }})

    it("joins attribute values", function() { with(this) {
      assertNodesMatch( ["link1"], ".//a[contains(concat(' ', @class, ' '), ' visibility ')]" )
    }})
  }})

  describe("contains()", function() { with(this) {
    it("matches if the first piece of text contains the second", function() { with(this) {
      assertNodesMatch( ["label-male", "label-female"], "//label[contains(text(),'ale')]" )
    }})

    it("allows a . to get the node's full text", function() { with(this) {
      assertNodesMatch( ["label-male", "label-female"], "//label[contains(.,'ale')]" )
      assertNodesMatch( ["first-heading"],"//h1[contains(.,'The title')]" )
    }})

    it("does not match if the first piece of text does not contain the second", function() { with(this) {
      assertNodesMatch( [], "//label[contains(text(),'Fail')]" )
      assertNodesMatch( [], "//h1[contains(text(),'The title')]" )
    }})

    it("matches if normalize-space is used", function() { with(this) {
      assertNodesMatch( ["oddly-spaced"], "//p[contains(normalize-space(.),'Text with double spacing')]" )
    }})
  }})

  describe("following-sibling", function() { with(this) {
    it("finds table rows", function() { with(this) {
      assertNodesMatch( ["random_table"],
                        ".//table[contains(.//caption, 'Ransom')][.//tr[./*[self::td | self::th][normalize-space(string(.)) = '2007']/following-sibling::*[1]/self::*[self::td | self::th][normalize-space(string(.)) = '$300']/following-sibling::*[1]/self::*[self::td | self::th][normalize-space(string(.)) = '$100']]]" )
    }})
  }})
}})

