"use strict";

exports.__esModule = true;

exports["default"] = function () {
  return {
    metadata: {
      group: "builtin-post"
    },
    visitor: {
      CallExpression: function CallExpression(node, parent, scope, file) {
        var callee = this.get('callee');

        if (callee.isMemberExpression({ computed: false }) &&
            callee.get("property").isIdentifier({ name: "includes" }) &&
            callee.get("object").isGenericType("Array")) {

          callee.node.property.name = 'indexOf';

          return t.logicalExpression(">=", node, t.literal(0));
        }
      }
    }
  };
};

module.exports = exports["default"];