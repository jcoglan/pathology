Pathology.Negation = new JS.Module('Pathology.Negation', {
  evaluate: function(context) {
    return !this.expression.evaluate(context);
  }
});

