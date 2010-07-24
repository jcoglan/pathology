var Pathology = new JS.Module('Pathology', {
  extend: {
    evaluate: function(xpathExpression, context, nsResolver, resultType, result) {
      result = result || new Pathology.XPathResult(resultType);
      var expression = Pathology.XPathParser.parse(xpathExpression);
      expression.evaluate(context, nsResolver, resultType, result);
      return result;
    },
    
    atomize: function(value) {
      return value.atomize ? value.atomize() : value;
    }
  }
});

if (typeof XPathResult === 'undefined') {
  XPathResult = {
    ANY_TYPE:                     0,
    NUMBER_TYPE:                  1,
    STRING_TYPE:                  2,
    BOOLEAN_TYPE:                 3,
    UNORDERED_NODE_ITERATOR_TYPE: 4,
    ORDERED_NODE_ITERATOR_TYPE:   5,
    UNORDERED_NODE_SNAPSHOT_TYPE: 6,
    ORDERED_NODE_SNAPSHOT_TYPE:   7,
    ANY_UNORDERED_NODE_TYPE:      8,
    FIRST_ORDERED_NODE_TYPE:      9
  };
}

if (typeof document.evaluate === 'undefined') {
  document.evaluate = function() {
    return Pathology.evaluate.apply(Pathology, arguments);
  };
}

