Pathology.Union = new JS.Module('Pathology.Union', {
  eachPath: function(block, scope) {
    block.call(scope, this.head);
    this.rest.forEach(function(section) {
      block.call(scope, section.location_path);
    });
  },
  
  evaluate: function(context, root, resultType, result) {
    result = result || new Pathology.XPathResult(XPathResult.ANY_TYPE);
    resultType = resultType || XPathResult.ANY_TYPE;
    
    this.eachPath(function(path) {
      path.evaluate(context, root, resultType, result);
    });
    
    return result;
  }
});

