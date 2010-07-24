Pathology.Atom = new JS.Module('Pathology.Atom', {
  evaluate: function(context) {
    var expression = this.expression.in_parens || this.expression;
    return expression.evaluate(context);
  }
});

