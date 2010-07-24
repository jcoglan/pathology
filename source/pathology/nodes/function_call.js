Pathology.FunctionCall = new JS.Module('Pathology.FunctionCall', {
  getArguments: function(context) {
    var args = [];
    if (this.function_args.first.evaluate) {
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
    
    return proc.apply(context, args);
  },
  
  extend: {
    REGISTER: {
      concat: function() {
        return Array.prototype.join.call(arguments, "");
      },
      
      not: function(value) {
        return !value;
      },
      
      text: function() {
        var query = document.evaluate('/text()', this, null, XPathResult.ANY_TYPE, null);
        return query.atomize();
      }
    }
  }
});

