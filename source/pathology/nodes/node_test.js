Pathology.XPathParser.NodeTest = {
  evaluate: function(context, predicates, root, resultType, result) {
    if (this.condition_name) {
      switch (this.condition_name.textValue) {
        case 'node':
          // NOOP
          break;
        case 'text':
          if (context.nodeType !== XPathResult.BOOLEAN_TYPE)
            return;
          break;
      }
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
      var expression = predicate.expression;
      viable = viable && Pathology.atomize(expression, context, root);
    });
    
    if (viable) result.push(context);
  }
};

