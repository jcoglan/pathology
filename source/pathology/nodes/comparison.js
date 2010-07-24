Pathology.Comparison = new JS.Module('Pathology.Comparison', {
  evaluate: function(context, root) {
    var left  = Pathology.atomize(this.left, context, root),
        right = Pathology.atomize(this.right, context, root);
    
    switch (this.comparator.textValue) {
      case '=':   return left == right;
      case '!=':  return left != right;
    }
  }
});

