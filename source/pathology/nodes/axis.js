Pathology.Axis = new JS.Module('Pathology.Axis', {
  walk: function(context, block, scope) {
    var identifier = this.axis_identifier;
    
    var name = identifier.axis_name
             ? identifier.axis_name.textValue
             : Pathology.Axis.SHORTHANDS[identifier.textValue];
    
    var children = context.childNodes;
    
    switch (name) {
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

