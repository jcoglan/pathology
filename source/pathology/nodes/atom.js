Pathology.XPathParser.Atom = {
  evaluate: function(context, root) {
    var expression = this.expression.in_parens || this.expression;
    return expression.evaluate(context, root);
  }
};

