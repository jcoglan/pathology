if (typeof CWD === 'undefined') CWD = '.'

JS.Packages(function() { with(this) {
    file(CWD + '/build/pathology-min.js')
        .provides('Pathology', 'document.evaluate')
        .requires('JS.Class', 'JS.Module');
    
    autoload(/^(.*)Spec$/, {from: CWD + '/spec'})
}})

JS.require('JS.Test', 'Pathology', function() {
    
    Pathology.SpecHelper = new JS.Module({
      assertNodesMatch: function(expectedIds, xpath) {
        var expected = [], id;
        while (id = expectedIds.shift())
          expected.push(document.getElementById(id));
        
        var iterator = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null),
            actual   = [],
            element;
        
        while (element = iterator.iterateNext())
          actual.push(element);
        
        this.assertEqual(expected, actual);
      }
    });
    
    JS.require('PathSpec',
            
    JS.Test.method('autorun'))
})

