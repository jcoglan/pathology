Pathology.NodeTest = new JS.Module('Pathology.NodeTest', {
  evaluate: function(context, predicate, nsResolver, resultType, result) {
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
      if (tagName !== '*') {
        if (!context.nodeName) return;
        if (context.nodeName.toLowerCase() !== tagName) return;
      }
    }
    
    if (!predicate || !predicate.expression)
      return result.push(context);
    
    if (predicate.expression.evaluate(context))
      result.push(context);
  }
});

