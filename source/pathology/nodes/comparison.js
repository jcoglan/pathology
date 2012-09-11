Pathology.XPathParser.Comparison = {
  evaluate: function(context, root) {
    // TODO make this symmetric
    var comparator = this.comparator.textValue,
        left       = this.left.evaluate(context, root),
        right      = Pathology.atomize(this.right, context, root);
    
    if (left.forEach) {
      var viable = false;
      left.forEach(function(node) {
        switch (comparator) {
          case '=':
            viable = viable || (right instanceof Array ? right.indexOf(node.nodeValue) >= 0 : node.nodeValue == right);
            break;
          case '!=':
            viable = viable || (right instanceof Array ? right.indexOf(node.nodeValue) < 0 : node.nodeValue != right);
            break;
        }
      });
      return viable;
    
    } else {
      switch (comparator) {
        case '=':   return right instanceof Array ? right.indexOf(left.nodeValue) >= 0 : left == right;
        case '!=':  return right instanceof Array ? right.indexOf(node.nodeValue) <  0 : left != right;
      }
    }
  }
};

