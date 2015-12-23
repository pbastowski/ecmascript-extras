# Do NOT use this package. It is out of date and has various issues that will not be fixed.

# Use pbastowski:angular-babel instead. It works even in non-angular situations.

> This is an experimental release and may contain ugly bugs

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

## `import ... from` and `require`

Babel does not include a `require` loader, it just compiles statements like below

```javascript
import {x, y, z} from "modulename";
```

into something like this 

```javascript
var x = require('modulename')['x'];
var y = require('modulename')['y'];
var z = require('modulename')['z'];
```

So, if you actually use the `import ... from` syntax in your code then you may see errors in your dev console. To get around that, I have created a simple `require` package, which implements just enough of `require` and `module.exports` to enable you to export and import in Meteor apps. 
 
Try it and see if it works for you:
 
    meteor add pbastowski:require
     
