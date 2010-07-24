Pathology.NodeTest = new JS.Module('Pathology.NodeTest', {
  evaluate: function(context, nsResolver, resultType, result) {
    var tagName = this.textValue.toLowerCase();
    if (!context.tagName) return;
    if (context.tagName.toLowerCase() === tagName)
      result.push(context);
  }
});

