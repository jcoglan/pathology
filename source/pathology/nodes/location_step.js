Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  evaluate: function(context, nsResolver, resultType, result) {
    this.axis.walk(context, function(node) {
      if (!this.test) return result.push(node);
      this.test.evaluate(node, nsResolver, resultType, result);
    }, this);
  }
});

