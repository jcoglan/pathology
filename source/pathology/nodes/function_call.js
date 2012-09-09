Pathology.XPathParser.FunctionCall = {
  getArguments: function(context, root) {
    var args = [];
    if (this.function_args.first && this.function_args.first.evaluate) {
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
        proc = this.REGISTER[this.function_name.textValue];
    
    return proc.apply(context, args);
  },
  
  REGISTER: {
    'concat': function() {
      return Array.prototype.join.call(arguments, "");
    },
    
    'contains': function(haystack, needle) {
      if (!haystack) return false;
      if (haystack.makeString) haystack = haystack.makeString();
      
      return haystack.toString().indexOf(needle) >= 0;
    },
    
    'normalize-space': function(string) {
      if (string.makeString) string = string.makeString();
      
      return string.toString().replace(/^\s*/g, '')
                              .replace(/\s*$/g, '')
                              .replace(/\s+/g, ' ');
    },
    
    'name': function() {
      return this.nodeName.toLowerCase();
    },
    
    'not': function(value) {
      if (value && value.atomize) value = value.atomize();
      if (typeof value === 'string') return false;
      return !value;
    },
    
    'string': function(value) {
      return value.atomize().innerText;
    },
    
    'text': function() {
      return document.evaluate('/text()', this, null, XPathResult.ANY_TYPE, null);
    }
  }
};

