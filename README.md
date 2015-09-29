# ecmascript-extras

Adds ES7 decorator support and a few other missing bits to the existing Meteor 1.2 ecmascript package.

## Install

```shell
   meteor add pbastowski:ecmascript-extras
```

## Babel transformers added by this package

Here is the list of extra transformers added by this package:

- es5.properties.mutators 

- es6.modules 
- es6.regex.sticky 
- es6.regex.unicode 
- es6.tailCall 
- es6.templateLiterals 

- es7.decorators (stage 1)
- es7.classProperties (stage 0)
- es7.exportExtensions (stage 1)
- es7.comprehensions (stage 0)
- es7.asyncFunctions (stage 2)
- es7.doExpressions (stage 0)
- es7.exponentiationOperator (stage 3)

Please note that all es7 transformers are considered experimental, especially those at Stage 0 and 1. 

To support the decorators and modules transformers, the following functions are added to the babelHelpers object:

- defineDecoratedPropertyDescriptor
- createDecoratedClass
- interopRequireDefault
