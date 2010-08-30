Pathology.Comparison = new JS.Module('Pathology.Comparison', {
  evaluate: function(context, root) {
    // TODO make this symmetric
    var comparator = this.comparator.textValue,
        left       = this.left.evaluate(context, root),
        right      = Pathology.atomize(this.right, context, root);
    
    if (left.forEach) {
      var viable = false;
      left.forEach(function(node) {
        switch (comparator) {
          case '=':   viable = viable || (node.nodeValue == right); break;
          case '!=':  viable = viable || (node.nodeValue != right); break;
        }
      });
      return viable;
    
    } else {
      switch (comparator) {
        case '=':   return left == right;
        case '!=':  return left != right;
      }
    }
  }
});

