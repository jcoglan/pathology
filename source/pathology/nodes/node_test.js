Pathology.NodeTest = new JS.Module('Pathology.NodeTest', {
  evaluate: function(context, nsResolver, resultType, result) {
    if (this.condition_name) {
      switch (this.condition_name.textValue) {
        case 'node':
          result.push(context);
          break;
      }
    } else {
      var tagName = this.textValue.toLowerCase();
      if (!context.nodeName) return;
      if (context.nodeName.toLowerCase() === tagName)
        result.push(context);
    }
  }
});

