Pathology.LocationStep = new JS.Module('Pathology.LocationStep', {
  isRelative: function() {
    return !this.head.slash;
  },
  
  evaluate: function(context, root, resultType, result) {
    var axis = this.head.axis, test = this.head.test;
    axis.walk(context, function(node) {
      if (!test || !test.evaluate) return result.push(node);
      test.evaluate(node, this.predicates, root, resultType, result);
    }, this);
  }
});

