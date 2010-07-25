Pathology.FunctionCall = new JS.Module('Pathology.FunctionCall', {
  getArguments: function(context, root) {
    var args = [];
    if (this.function_args.first.evaluate) {
      args.push(this.function_args.first.evaluate(context, root));
    }
    if (this.function_args.rest) {
      this.function_args.rest.forEach(function(arg) {
        args.push(arg.expression.evaluate(context, root));
      });
    }
    return args;
  },
  
  evaluate: function(context, root) {
    var args = this.getArguments(context, root),
        proc = Pathology.FunctionCall.REGISTER[this.function_name.textValue];
    
    return proc.apply(context, args);
  },
  
  extend: {
    REGISTER: {
      'concat': function() {
        return Array.prototype.join.call(arguments, "");
      },
      
      'contains': function(haystack, needle) {
        if (!haystack) return false;
        return haystack.toString().indexOf(needle) >= 0;
      },
      
      'normalize-space': function(string) {
        return string.toString().replace(/^\s*/g, '')
                                .replace(/\s*$/g, '')
                                .replace(/\s+/, ' ');
      },
      
      'not': function(value) {
        return !value;
      },
      
      'text': function() {
        return document.evaluate('/text()', this, null, XPathResult.ANY_TYPE, null);
      }
    }
  }
});

