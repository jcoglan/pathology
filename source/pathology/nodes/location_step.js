Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  evaluate: function(context, nsResolver, resultType, result) {
    this.axis.walk(context, function(node) {
      if (!this.test || !this.test.evaluate) return result.push(node);
      this.test.evaluate(node, this.predicate, nsResolver, resultType, result);
    }, this);
  }
});

