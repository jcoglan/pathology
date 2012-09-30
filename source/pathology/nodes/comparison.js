Pathology.XPathParser.Comparison = {
  evaluate: function(context, root) {
    // TODO make this symmetric
    var comparator = this.comparator.textValue,
        left       = this.left.evaluate(context, root),
        right      = Pathology.atomize(this.right, context, root),
        viable     = false,
        array      = (right instanceof Array);
    
    if (left.forEach) {
      left.forEach(function(node) {
        switch (comparator) {
          case '=':
            viable = viable || (array ? right.indexOf(node.nodeValue) >= 0 : (node.nodeValue == right || node.innerHTML == right));
            break;
          case '!=':
            viable = viable || (array ? right.indexOf(node.nodeValue) < 0 : node.nodeValue != right);
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

