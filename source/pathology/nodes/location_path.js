Pathology.XPathParser.LocationPath = {
  eachStep: function(block, scope) {
    var list = [this.head].concat(this.rest.elements);
    for (var i = 0, n = list.length; i < n; i++)
      block.call(scope, list[i]);
  },

  evaluate: function(context, root, resultType, result) {
    result = result || new Pathology.XPathResult(XPathResult.ANY_TYPE);
    resultType = resultType || XPathResult.ANY_TYPE;

    var intermediate = new Pathology.XPathResult(resultType),
        startNode    = this.head.isRelative() ? context : root,
        steps        = [this.head].concat(this.rest.elements),
        step,
        nextStage,
        i, j, n, m;

    intermediate.push(startNode);

    for (i = 0, n = steps.length; i < n; i++) {
      step = steps[i];
      nextStage = new Pathology.XPathResult(resultType);
      for (j = 0, m = intermediate._nodes.length; j < m; j++) {
        step.evaluate(intermediate._nodes[j], root, resultType, nextStage);
      }
      intermediate = nextStage;
    }

    for (i = 0, n = intermediate._nodes.length; i < n; i++)
      result.push(intermediate._nodes[i]);

    return result;
  }
};

