Pathology.Axis = function(name) {
  this.name = name;
};

Pathology.Axis.prototype.walk = function(context, block, scope) {
  var children   = context.childNodes,
      attributes = Pathology.array(context.attributes),
      sibling;

  if (context.checked)
    attributes.push({ nodeName:   'checked',
                      nodeValue:  true,
                      nodeType:   XPathResult.STRING_TYPE
                   });

  if (context.selected)
    attributes.push({ nodeName:   'selected',
                      nodeValue:  true,
                      nodeType:   XPathResult.STRING_TYPE
                   });

  switch (this.name) {
    case 'attribute':
      for (var i = 0, n = attributes.length; i < n; i++) {
        block.call(scope, attributes[i]);
      }
      break;

    case 'child':
      for (var i = 0, n = children.length; i < n; i++) {
        block.call(scope, children[i]);
      }
      break;

    case 'descendant-or-self':
      block.call(scope, context);
      for (var i = 0, n = children.length; i < n; i++) {
        this.walk(children[i], block, scope);
      }
      break;

    case 'following-sibling':
      sibling = context.nextSibling;
      while (sibling) {
        block.call(scope, sibling);
        sibling = sibling.nextSibling;
      }
      break;

    case 'parent':
      block.call(scope, context.parentNode);
      break;

    case 'self':
      block.call(scope, context);
      break;
  }
};

Pathology.Axis.SHORTHANDS = {
  '@' : 'attribute',
  '..': 'parent',
  '.' : 'self',
  '/' : 'descendant-or-self',
  ''  : 'child'
};

Pathology.Axis.fromAST = function(node) {
  var name = node.axis_name
           ? node.axis_name.textValue
           : node.textValue;

  return new this(this.SHORTHANDS[name] || name);
};

