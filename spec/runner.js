if (typeof CWD === 'undefined') CWD = '.'

JS.Packages(function() { with(this) {
    file(CWD + '/build/pathology-min.js')
        .provides('Pathology', 'document.evaluate')
        .requires('JS.Class', 'JS.Module');
    
    autoload(/^(.*)Spec$/, {from: CWD + '/spec'})
}})

JS.require('JS.Test', 'Pathology', function() {
    
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
      }
    });
    
    JS.require('PathSpec',
               'AttributeSpec',
               'PredicateSpec',
            
    JS.Test.method('autorun'))
})

