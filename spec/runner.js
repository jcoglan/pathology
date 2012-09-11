if (typeof CWD === 'undefined') CWD = '.'
JS.cacheBust = true

JS.Packages(function() { with(this) {
    file(CWD + '/build/pathology-min.js')
        .provides('Pathology', 'document.evaluate')
    
    autoload(/^(.*)Spec$/, {from: CWD + '/spec'})
}})

JS.require('JS.Test', 'Pathology', function() {
    document.evaluate = function() {
      return Pathology.evaluate.apply(Pathology, arguments);
    };
    
    Pathology.SpecHelper = new JS.Module({
      include: JS.Test.Helpers,
      
      performQuery: function(xpath) {
        var iterator = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null),
            actual   = [],
            element;
        
        while (element = iterator.iterateNext())
          actual.push(element);
        
        return actual;
      },
      
      assertNodesMatch: function(expectedIds, xpath) {
        var expected = [], id;
        while (id = expectedIds.shift())
          expected.push(document.getElementById(id));
        
        this.assertEqual(expected, this.performQuery(xpath));
      },
      
      assertAttributesMatch: function(expectedValues, xpath) {
        var attributes = this.performQuery(xpath);
        this.assertEqual( expectedValues.length, attributes.length );
        
        this.forEach(expectedValues, function(value, i) {
          this.assertEqual( value, attributes[i].nodeValue );
          this.assertEqual( XPathResult.STRING_TYPE, attributes[i].nodeType );
        }, this);
      },
      
      assertTextMatch: function(expectedValues, xpath) {
        var texts = this.performQuery(xpath);
        this.assertEqual( expectedValues.length, texts.length );
        
        this.forEach(expectedValues, function(value, i) {
          this.assertEqual( value, texts[i].nodeValue );
          this.assertEqual( XPathResult.BOOLEAN_TYPE, texts[i].nodeType );
        }, this);
      }
    });
    
    JS.require('PathSpec',
               'AttributeSpec',
               'PredicateSpec',
               'LogicSpec',
            
    JS.Test.method('autorun'))
})

