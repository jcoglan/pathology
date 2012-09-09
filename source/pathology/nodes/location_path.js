Pathology.XPathParser.LocationPath = {
  eachStep: function(block, scope) {
    block.call(scope, this.head);
    this.rest.forEach(block, scope);
  },
  
  evaluate: function(context, root, resultType, result) {
    result = result || new Pathology.XPathResult(XPathResult.ANY_TYPE);
    resultType = resultType || XPathResult.ANY_TYPE;
    
    var intermediate = new Pathology.XPathResult(resultType),
        startNode    = this.head.isRelative() ? context : root;
    
    intermediate.push(startNode);
    
    this.eachStep(function(step) {
      var nextStage = new Pathology.XPathResult(resultType);
      intermediate.forEach(function(node) {
        step.evaluate(node, root, resultType, nextStage);
      });
      intermediate = nextStage;
    });
    intermediate.forEach(result.push, result);
    
    return result;
  }
};

