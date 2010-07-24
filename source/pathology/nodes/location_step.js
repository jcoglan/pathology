Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  evaluate: function(context, nsResolver, resultType, result) {
    var children = context.childNodes;
    for (var i = 0, n = children.length; i < n; i++)
      this.node_test.evaluate(children[i], nsResolver, resultType, result);
  }
});

