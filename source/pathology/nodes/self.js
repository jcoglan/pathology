Pathology.Self = new JS.Module('Pathology.Self', {
  evaluate: function(context, root) {
    this._context = context;
    return this;
  },
  
  toString: function() {
    var result = document.evaluate('//text()', this._context, null, XPathResult.ANY_TYPE, null);
    return result.toString();
  }
});

