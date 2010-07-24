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
  }
});

