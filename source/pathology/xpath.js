
(function() {;
    var namespace = this;
    namespace = namespace.Pathology = namespace.Pathology || {};
    if (typeof exports === "object") {
        exports.Pathology = this.Pathology;
    }
})();

Pathology.XPath = new JS.Module("Pathology.XPath", {
    root: "location_path",
    __consume__location_path: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.location_path = this._nodeCache.location_path || {};
        var cached = this._nodeCache.location_path[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var remaining0 = 1;
        var index1 = this._offset;
        var elements0 = [];
        var text0 = "";
        var address1 = true;
        while (address1) {
            address1 = this.__consume__location_step();
            if (address1) {
                elements0.push(address1);
                text0 += address1.textValue;
                remaining0 -= 1;
            }
        }
        if (remaining0 <= 0) {
            this._offset = index1;
            var klass0 = null;
            if (Pathology.LocationPath instanceof Function) {
                klass0 = Pathology.LocationPath;
            } else {
                klass0 = this.klass.SyntaxNode;
            }
            address0 = new klass0(text0, this._offset, elements0);
            if (!(Pathology.LocationPath instanceof Function)) {
                address0.extend(Pathology.LocationPath);
            }
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        return this._nodeCache.location_path[index0] = address0;
    },
    __consume__location_step: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.location_step = this._nodeCache.location_step || {};
        var cached = this._nodeCache.location_step[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        var elements0 = [];
        var labelled0 = {};
        var text0 = "";
        var address1 = null;
        address1 = this.__consume__axis();
        if (address1) {
            elements0.push(address1);
            text0 += address1.textValue;
            labelled0.axis = address1;
            var address2 = null;
            var index2 = this._offset;
            address2 = this.__consume__node_test();
            if (address2) {
            } else {
                this._offset = index2;
                var klass0 = this.klass.SyntaxNode;
                address2 = new klass0("", this._offset, []);
                this._offset += 0;
            }
            if (address2) {
                elements0.push(address2);
                text0 += address2.textValue;
                labelled0.test = address2;
            } else {
                elements0 = null;
                this._offset = index1;
            }
        } else {
            elements0 = null;
            this._offset = index1;
        }
        if (elements0) {
            this._offset = index1;
            var klass1 = null;
            if (Pathology.LocationStep instanceof Function) {
                klass1 = Pathology.LocationStep;
            } else {
                klass1 = this.klass.SyntaxNode;
            }
            address0 = new klass1(text0, this._offset, elements0, labelled0);
            if (!(Pathology.LocationStep instanceof Function)) {
                address0.extend(Pathology.LocationStep);
            }
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        return this._nodeCache.location_step[index0] = address0;
    },
    __consume__axis: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.axis = this._nodeCache.axis || {};
        var cached = this._nodeCache.axis[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        var elements0 = [];
        var labelled0 = {};
        var text0 = "";
        var address1 = null;
        if (this._input.substring(this._offset, this._offset + 1) === "/") {
            var klass0 = this.klass.SyntaxNode;
            address1 = new klass0("/", this._offset, []);
            this._offset += 1;
        } else {
            address1 = null;
        }
        if (address1) {
            elements0.push(address1);
            text0 += address1.textValue;
            var address2 = null;
            address2 = this.__consume__axis_identifier();
            if (address2) {
                elements0.push(address2);
                text0 += address2.textValue;
                labelled0.axis_identifier = address2;
            } else {
                elements0 = null;
                this._offset = index1;
            }
        } else {
            elements0 = null;
            this._offset = index1;
        }
        if (elements0) {
            this._offset = index1;
            var klass1 = null;
            if (Pathology.Axis instanceof Function) {
                klass1 = Pathology.Axis;
            } else {
                klass1 = this.klass.SyntaxNode;
            }
            address0 = new klass1(text0, this._offset, elements0, labelled0);
            if (!(Pathology.Axis instanceof Function)) {
                address0.extend(Pathology.Axis);
            }
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        return this._nodeCache.axis[index0] = address0;
    },
    __consume__axis_identifier: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.axis_identifier = this._nodeCache.axis_identifier || {};
        var cached = this._nodeCache.axis_identifier[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        var index2 = this._offset;
        var elements0 = [];
        var labelled0 = {};
        var text0 = "";
        var address1 = null;
        var remaining0 = 1;
        var index3 = this._offset;
        var elements1 = [];
        var text1 = "";
        var address2 = true;
        while (address2) {
            var temp0 = this._input.substring(this._offset, this._offset + 1);
            var match0 = null;
            if (match0 = temp0.match(/^[a-z\-]/)) {
                var klass0 = this.klass.SyntaxNode;
                address2 = new klass0(match0[0], this._offset, []);
                this._offset += 1;
            } else {
                address2 = null;
            }
            if (address2) {
                elements1.push(address2);
                text1 += address2.textValue;
                remaining0 -= 1;
            }
        }
        if (remaining0 <= 0) {
            this._offset = index3;
            var klass1 = this.klass.SyntaxNode;
            address1 = new klass1(text1, this._offset, elements1);
            this._offset += text1.length;
        } else {
            address1 = null;
        }
        if (address1) {
            elements0.push(address1);
            text0 += address1.textValue;
            labelled0.axis_name = address1;
            var address3 = null;
            if (this._input.substring(this._offset, this._offset + 2) === "::") {
                var klass2 = this.klass.SyntaxNode;
                address3 = new klass2("::", this._offset, []);
                this._offset += 2;
            } else {
                address3 = null;
            }
            if (address3) {
                elements0.push(address3);
                text0 += address3.textValue;
            } else {
                elements0 = null;
                this._offset = index2;
            }
        } else {
            elements0 = null;
            this._offset = index2;
        }
        if (elements0) {
            this._offset = index2;
            var klass3 = this.klass.SyntaxNode;
            address0 = new klass3(text0, this._offset, elements0, labelled0);
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        if (address0) {
        } else {
            this._offset = index1;
            address0 = this.__consume__axis_shorthand();
            if (address0) {
            } else {
                this._offset = index1;
            }
        }
        return this._nodeCache.axis_identifier[index0] = address0;
    },
    __consume__axis_shorthand: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.axis_shorthand = this._nodeCache.axis_shorthand || {};
        var cached = this._nodeCache.axis_shorthand[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        if (this._input.substring(this._offset, this._offset + 1) === "@") {
            var klass0 = this.klass.SyntaxNode;
            address0 = new klass0("@", this._offset, []);
            this._offset += 1;
        } else {
            address0 = null;
        }
        if (address0) {
        } else {
            this._offset = index1;
            if (this._input.substring(this._offset, this._offset + 2) === "..") {
                var klass1 = this.klass.SyntaxNode;
                address0 = new klass1("..", this._offset, []);
                this._offset += 2;
            } else {
                address0 = null;
            }
            if (address0) {
            } else {
                this._offset = index1;
                if (this._input.substring(this._offset, this._offset + 1) === ".") {
                    var klass2 = this.klass.SyntaxNode;
                    address0 = new klass2(".", this._offset, []);
                    this._offset += 1;
                } else {
                    address0 = null;
                }
                if (address0) {
                } else {
                    this._offset = index1;
                    if (this._input.substring(this._offset, this._offset + 1) === "/") {
                        var klass3 = this.klass.SyntaxNode;
                        address0 = new klass3("/", this._offset, []);
                        this._offset += 1;
                    } else {
                        address0 = null;
                    }
                    if (address0) {
                    } else {
                        this._offset = index1;
                        if (this._input.substring(this._offset, this._offset + 0) === "") {
                            var klass4 = this.klass.SyntaxNode;
                            address0 = new klass4("", this._offset, []);
                            this._offset += 0;
                        } else {
                            address0 = null;
                        }
                        if (address0) {
                        } else {
                            this._offset = index1;
                        }
                    }
                }
            }
        }
        return this._nodeCache.axis_shorthand[index0] = address0;
    },
    __consume__node_test: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.node_test = this._nodeCache.node_test || {};
        var cached = this._nodeCache.node_test[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        address0 = this.__consume__node_condition();
        if (address0) {
            if (!(Pathology.NodeTest instanceof Function)) {
                address0.extend(Pathology.NodeTest);
            }
        } else {
            this._offset = index1;
            address0 = this.__consume__node_name();
            if (address0) {
                if (!(Pathology.NodeTest instanceof Function)) {
                    address0.extend(Pathology.NodeTest);
                }
            } else {
                this._offset = index1;
            }
        }
        return this._nodeCache.node_test[index0] = address0;
    },
    __consume__node_condition: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.node_condition = this._nodeCache.node_condition || {};
        var cached = this._nodeCache.node_condition[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var index1 = this._offset;
        var elements0 = [];
        var labelled0 = {};
        var text0 = "";
        var address1 = null;
        var remaining0 = 1;
        var index2 = this._offset;
        var elements1 = [];
        var text1 = "";
        var address2 = true;
        while (address2) {
            var temp0 = this._input.substring(this._offset, this._offset + 1);
            var match0 = null;
            if (match0 = temp0.match(/^[a-z\-]/)) {
                var klass0 = this.klass.SyntaxNode;
                address2 = new klass0(match0[0], this._offset, []);
                this._offset += 1;
            } else {
                address2 = null;
            }
            if (address2) {
                elements1.push(address2);
                text1 += address2.textValue;
                remaining0 -= 1;
            }
        }
        if (remaining0 <= 0) {
            this._offset = index2;
            var klass1 = this.klass.SyntaxNode;
            address1 = new klass1(text1, this._offset, elements1);
            this._offset += text1.length;
        } else {
            address1 = null;
        }
        if (address1) {
            elements0.push(address1);
            text0 += address1.textValue;
            labelled0.condition_name = address1;
            var address3 = null;
            if (this._input.substring(this._offset, this._offset + 2) === "()") {
                var klass2 = this.klass.SyntaxNode;
                address3 = new klass2("()", this._offset, []);
                this._offset += 2;
            } else {
                address3 = null;
            }
            if (address3) {
                elements0.push(address3);
                text0 += address3.textValue;
            } else {
                elements0 = null;
                this._offset = index1;
            }
        } else {
            elements0 = null;
            this._offset = index1;
        }
        if (elements0) {
            this._offset = index1;
            var klass3 = this.klass.SyntaxNode;
            address0 = new klass3(text0, this._offset, elements0, labelled0);
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        return this._nodeCache.node_condition[index0] = address0;
    },
    __consume__node_name: function(input) {
        var address0 = null;
        var index0 = this._offset;
        this._nodeCache.node_name = this._nodeCache.node_name || {};
        var cached = this._nodeCache.node_name[index0];
        if (cached) {
            this._offset += cached.textValue.length;
            return cached;
        }
        var remaining0 = 1;
        var index1 = this._offset;
        var elements0 = [];
        var text0 = "";
        var address1 = true;
        while (address1) {
            var temp0 = this._input.substring(this._offset, this._offset + 1);
            var match0 = null;
            if (match0 = temp0.match(/^[A-Za-z0-9\-]/)) {
                var klass0 = this.klass.SyntaxNode;
                address1 = new klass0(match0[0], this._offset, []);
                this._offset += 1;
            } else {
                address1 = null;
            }
            if (address1) {
                elements0.push(address1);
                text0 += address1.textValue;
                remaining0 -= 1;
            }
        }
        if (remaining0 <= 0) {
            this._offset = index1;
            var klass1 = this.klass.SyntaxNode;
            address0 = new klass1(text0, this._offset, elements0);
            this._offset += text0.length;
        } else {
            address0 = null;
        }
        return this._nodeCache.node_name[index0] = address0;
    }
});

Pathology.XPathParser = new JS.Class("Pathology.XPathParser", {
    include: Pathology.XPath,
    initialize: function(input) {
        this._input = input;
        this._offset = 0;
        this._nodeCache = {};
    },
    parse: function() {
        var result = this["__consume__" + this.root]();
        return this._offset === this._input.length ? result : null;
    },
    extend: {
        parse: function(input) {
            var parser = new this(input);
            return parser.parse();
        }
    }
});

Pathology.XPathParser.SyntaxNode = new JS.Class("Pathology.XPathParser.SyntaxNode", {
    include: JS.Enumerable,
    initialize: function(textValue, offset, elements, properties) {
        this.textValue = textValue;
        this.offset    = offset;
        this.elements  = elements || [];
        if (!properties) return;
        for (var key in properties) this[key] = properties[key];
    },
    forEach: function(block, context) {
        for (var i = 0, n = this.elements.length; i < n; i++)
            block.call(context, this.elements[i], i);
    }
});
