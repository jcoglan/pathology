Pathology.XPathResult = new JS.Class('Pathology.XPathResult', {
  initialize: function(resultType) {
    this._type  = resultType;
    this._nodes = [];
    this._index = 0;
  },
  
  push: function(node) {
    if (this._type !== 0 && node.nodeType !== this._type) return;
    this._nodes.push(node);
  },
  
  iterateNext: function() {
    var node = this._nodes[this._index];
    if (!node) return null;
    this._index += 1;
    return node;
  },
  
  forEach: function(block, scope) {
    for (var i = 0, n = this._nodes.length; i < n; i++)
      block.call(scope, this._nodes[i], i);
  },
  
  atomize: function() {
    var node = this._nodes[0];
    if (!node) return null;
    if (node.nodeValue === undefined || node.nodeValue === null) return node;
    return node.nodeValue;
  },
  
  makeString: function() {
    var first = this._nodes[0];
    if (!first) return '';
    
    switch (first.nodeType) {
      case XPathResult.STRING_TYPE:
        return this.atomize();
      
      case XPathResult.BOOLEAN_TYPE:
        var parts = [];
        this.forEach(function(node) { parts.push(node.nodeValue) });
        return parts.join('');
      
      default:
        var result = document.evaluate('//text()', first, null, XPathResult.ANY_TYPE, null);
        return result.makeString();
    }
  }
});

