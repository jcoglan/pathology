Pathology.XPathParser.NodeTest = {
  evaluate: function(context, predicates, root, resultType, levels, result) {
    var name    = this.elements[0].condition_name,
        tagName = tagName = this.elements[0].textValue.toLowerCase();
    
    var first = {
      expression: {
        evaluate: function() {
          if (name && name.textValue === 'node') {
            return true;
          } else if (name && name.textValue === 'text') {
            if (context.nodeType !== XPathResult.BOOLEAN_TYPE) return false;
          } else {
            if (tagName === '*') {
              if (context.nodeType !== 1) return false;
            } else {
              if (!context.nodeName) return false;
              if (context.nodeName.toLowerCase() !== tagName) return false;
            }
          }
          return true;
        }
      },
      subscript: this.subscript
    };
    
    predicates = [first].concat(predicates.elements);
    var accepted, predicate;
    
    for (var i = 0, n = predicates.length; i < n; i++) {
      levels[i] = levels[i] || [];
      predicate = predicates[i];
      
      accepted = Pathology.atomize(predicate.expression, context, root);
      if (typeof accepted === 'string') accepted = true;
      if (!accepted) return;
      
      levels[i].push(context);
      
      if (predicate.subscript.integer) {
        if (predicate.subscript.integer.evaluate() !== levels[i].length) return;
      }
    }
    
    result.push(context);
  }
};

