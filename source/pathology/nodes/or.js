Pathology.Or = new JS.Module('Pathology.Or', {
  evaluate: function(context, root) {
    return Pathology.atomize(this.left, context, root) ||
           Pathology.atomize(this.right, context, root);
  }
});

