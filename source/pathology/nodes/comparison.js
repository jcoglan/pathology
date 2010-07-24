Pathology.Comparison = new JS.Module('Pathology.Comparison', {
  evaluate: function(context) {
    var left  = this.left.evaluate(context),
        right = this.right.evaluate(context);
    
    switch (this.comparator.textValue) {
      case '=':   return left == right;
      case '!=':  return left != right;
    }
  }
});

