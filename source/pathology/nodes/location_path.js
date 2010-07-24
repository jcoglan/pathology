Pathology.LocationPath = new JS.Module('Pathology.LocationPath', {
  evaluate: function(context, nsResolver, resultType, result) {
    var intermediate = new Pathology.XPathResult(resultType);
    intermediate.push(context);
    this.forEach(function(step) {
      var nextStage = new Pathology.XPathResult(resultType);
      intermediate.forEach(function(node) {
        step.evaluate(node, nsResolver, resultType, nextStage);
      });
      intermediate = nextStage;
    });
    intermediate.forEach(result.push, result);
  }
});

