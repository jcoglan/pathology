Pathology.Axis = new JS.Module('Pathology.Axis', {
  getName: function() {
    var identifier = this.axis_identifier;
    
    return identifier.axis_name
         ? identifier.axis_name.textValue
         : Pathology.Axis.SHORTHANDS[identifier.textValue];
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

