Pathology.String = new JS.Module('Pathology.String', {
  evaluate: function(context, root) {
    return eval(this.textValue);
  }
});

