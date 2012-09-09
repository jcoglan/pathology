Pathology.XPathParser.NodeTest = {
  evaluate: function(context, predicates, root, resultType, result) {
    var name = this.condition_name;
    if (name && name.textValue === 'node') {
      // NOOP
    } else if (name && name.textValue === 'text') {
      if (context.nodeType !== XPathResult.BOOLEAN_TYPE) return;
    } else {
      var tagName = this.textValue.toLowerCase();
      if (tagName === '*') {
        if (context.nodeType !== 1) return;
      } else {
        if (!context.nodeName) return;
        if (context.nodeName.toLowerCase() !== tagName) return;
      }
    }
    
    var viable = true;
    predicates.forEach(function(predicate) {
      viable = viable && Pathology.atomize(predicate.expression, context, root);
      if (typeof viable === 'string') viable = true;
    });
    
    if (viable) result.push(context);
  }
};

