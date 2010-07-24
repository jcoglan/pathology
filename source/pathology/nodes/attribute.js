Pathology.Attribute = new JS.Module('Pathology.Attribute', {
  evaluate: function(context) {
    if (!context.getAttributeNode && !context.getAttribute) return null;
    
    var name = this.node_name.textValue,
        node = context.getAttributeNode(name);
    
    if (!node) return null;
    
    return (node.value === 'false') ? false :
           (node.value === 'true')  ? true  :
           node.value;
  }
});

