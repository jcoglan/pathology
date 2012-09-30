Pathology.XPathParser.Comparison = {
  evaluate: function(context, root) {
    // TODO make this symmetric
    var comparator = this.comparator.textValue,
        left       = this.left.evaluate(context, root),
        right      = Pathology.atomize(this.right, context, root),
        viable     = false,
        array      = (right instanceof Array),
        node;
    
    if (left._nodes) {
      for (var i = 0, n = left._nodes.length; i < n; i++) {
        node = left._nodes[i];
        if (comparator === '=') {
          viable = viable || (array ? Pathology.indexOf(right, node.nodeValue) >= 0 : (node.nodeValue == right || node.innerHTML == right));
        } else if (comparator === '!=') {
          viable = viable || (array ? Pathology.indexOf(right, node.nodeValue) < 0 : (node.nodeValue != right && node.innerHTML != right));
        }
      }
      return viable;
    
    } else {
      switch (comparator) {
        case '=':   return array ? Pathology.indexOf(right, left.nodeValue) >= 0 : left == right;
        case '!=':  return array ? Pathology.indexOf(right, node.nodeValue) <  0 : left != right;
      }
    }
  }
};

