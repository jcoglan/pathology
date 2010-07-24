Pathology.XPathResult = new JS.Class('Pathology.XPathResult', {
  initialize: function(resultType) {
    this._type  = resultType;
    this._nodes = [];
    this._index = 0;
  },
  
  push: function(node) {
    this._nodes.push(node);
  },
  
  iterateNext: function() {
    var node = this._nodes[this._index];
    if (!node) return null;
    this._index += 1;
    return node;
  },
  
  forEach: function(block, context) {
    for (var i = 0, n = this._nodes.length; i < n; i++)
      block.call(context, this._nodes[i], i);
  }
});

