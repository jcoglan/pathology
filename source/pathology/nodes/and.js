Pathology.And = new JS.Module('Pathology.And', {
  evaluate: function(context, root) {
    return Pathology.atomize(this.left, context, root) &&
           Pathology.atomize(this.right, context, root);
  }
});

