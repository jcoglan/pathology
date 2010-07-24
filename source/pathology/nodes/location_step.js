Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  evaluate: function(context, nsResolver, resultType, result) {
    this.axis.walk(context, function(node) {
      if (!this.test) return result.push(node);
      if (!this.passPredicate(node)) return;
      this.test.evaluate(node, nsResolver, resultType, result);
    }, this);
  },
  
  passPredicate: function(node) {
    if (!this.predicate || !this.predicate.expression) return true;
    return this.predicate.expression.evaluate(node);
  }
});

