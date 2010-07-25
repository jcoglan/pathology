Pathology.Axis = new JS.Module('Pathology.Axis', {
  getName: function() {
    return this.axis_name
         ? this.axis_name.textValue
         : Pathology.Axis.SHORTHANDS[this.textValue];
  },
  
  walk: function(context, block, scope) {
    var children   = context.childNodes,
        attributes = context.attributes;
    
    switch (this.getName()) {
      case 'attribute':
        for (var i = 0, n = attributes.length; i < n; i++) {
          block.call(scope, attributes[i]);
        }
        break;
      
      case 'parent':
        block.call(scope, context.parentNode);
        break;
      
      case 'self':
        block.call(scope, context);
        break;
      
      case 'descendant-or-self':
        block.call(scope, context);
        for (var i = 0, n = children.length; i < n; i++) {
          this.walk(children[i], block, scope);
        }
        break;
      
      case 'child':
        for (var i = 0, n = children.length; i < n; i++) {
          block.call(scope, children[i]);
        }
        break;
    }
  },
  
  extend: {
    SHORTHANDS: {
      '@' : 'attribute',
      '..': 'parent',
      '.' : 'self',
      '/' : 'descendant-or-self',
      ''  : 'child'
    }
  }
});

