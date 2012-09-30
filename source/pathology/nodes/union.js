Pathology.XPathParser.Union = {
  evaluate: function(context, root, resultType, result) {
    result = result || new Pathology.XPathResult(XPathResult.ANY_TYPE);
    resultType = resultType || XPathResult.ANY_TYPE;
    
    this.head.evaluate(context, root, resultType, result);
    
    var sections = this.rest.elements;
    for (var i = 0, n = sections.length; i < n; i++)
      sections[i].location_path.evaluate(context, root, resultType, result);
    
    return result;
  }
};

