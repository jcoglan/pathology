Pathology.FunctionCall = new JS.Module('Pathology.FunctionCall', {
  getArguments: function(context) {
    var args = [];
    if (this.function_args.first) {
      args.push(this.function_args.first.evaluate(context));
    }
    if (this.function_args.rest) {
      this.function_args.rest.forEach(function(arg) {
        args.push(arg.expression.evaluate(context));
      });
    }
    return args;
  },
  
  evaluate: function(context) {
    var args = this.getArguments(context),
        proc = Pathology.FunctionCall.REGISTER[this.function_name.textValue];
    
    return proc.apply(this, args);
  },
  
  extend: {
    REGISTER: {
      not: function(value) {
        return !value;
      }
    }
  }
});

