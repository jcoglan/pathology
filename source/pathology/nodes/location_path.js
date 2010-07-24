Pathology.LocationPath = new JS.Module('Pathology.LocationPath', {
  evaluate: function(context, root, resultType, result) {
    result = result || new Pathology.XPathResult(XPathResult.ANY_TYPE);
    resultType = resultType || XPathResult.ANY_TYPE;
    
    var intermediate = new Pathology.XPathResult(resultType);
    intermediate.push(root);
    
    this.forEach(function(step) {
      var nextStage = new Pathology.XPathResult(resultType);
      intermediate.forEach(function(node) {
        step.evaluate(node, root, resultType, nextStage);
      });
      intermediate = nextStage;
    });
    intermediate.forEach(result.push, result);
    
    return result;
  }
});

