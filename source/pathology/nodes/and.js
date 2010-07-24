Pathology.And = new JS.Module('Pathology.And', {
  evaluate: function(context) {
    return this.left.evaluate(context) &&
           this.right.evaluate(context);
  }
});

