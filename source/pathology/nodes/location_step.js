Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  isRelative: function() {
    return this.elements[0].textValue !== '/';
  },
  
  evaluate: function(context, root, resultType, result) {
    var axis = this.selector.axis,
        test = this.selector.test;
    
    Pathology.Axis.fromAST(axis).walk(context, function(node) {
      if (!test || !test.evaluate) return result.push(node);
      test.evaluate(node, this.predicates, root, resultType, result);
    }, this);
  }
});

