Pathology.Or = new JS.Module('Pathology.Or', {
  evaluate: function(context) {
    return this.left.evaluate(context) ||
           this.right.evaluate(context);
  }
});

