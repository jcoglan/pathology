Pathology.XPathResult = function(resultType) {
  this._type  = resultType;
  this._nodes = [];
  this._index = 0;
};

Pathology.XPathResult.prototype.push = function(node) {
  if (this._type !== 0 && node.nodeType !== this._type) return;
  if (Pathology.indexOf(this._nodes, node) >= 0) return;
  this._nodes.push(node);
};

Pathology.XPathResult.prototype.iterateNext = function() {
  var node = this._nodes[this._index];
  if (!node) return null;
  this._index += 1;
  return node;
};

Pathology.XPathResult.prototype.atomize = function() {
  if (this._nodes.length === 0) return null;
  if (this._nodes.length === 1) {
    var node = this._nodes[0];
    if (node.nodeValue === undefined || node.nodeValue === null) return node;
    return node.nodeValue;
  } else {
    var nodes = [];
    for (var i = 0, n = this._nodes.length; i < n; i++) nodes.push(this._nodes[i].nodeValue);
    return nodes;
  }
};

Pathology.XPathResult.prototype.makeString = function() {
  var first = this._nodes[0];
  if (!first) return '';

  switch (first.nodeType) {
    case XPathResult.STRING_TYPE:
      return this.atomize();

    case XPathResult.BOOLEAN_TYPE:
      var parts = [];
      for (var i = 0, n = this._nodes.length; i < n; i++)
        parts.push(this._nodes[i].nodeValue);
      return parts.join('');

    default:
      var result = document.evaluate('//text()', first, null, XPathResult.ANY_TYPE, null);
      return result.makeString();
  }
};

