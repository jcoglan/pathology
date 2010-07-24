Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  evaluate: function(context, root, resultType, result) {
    this.axis.walk(context, function(node) {
      if (!this.test || !this.test.evaluate) return result.push(node);
      this.test.evaluate(node, this.predicates, root, resultType, result);
    }, this);
  }
});

