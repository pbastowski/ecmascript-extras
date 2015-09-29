// Write your package code here!
var fs = Npm.require('fs');
var path = Npm.require('path');

var appdir = process.env.PWD || process.cwd();
var filename = path.join(appdir, '.babelrc');

var whitelist = '{\n' +
'    "whitelist": [\n' +
'        "es5.properties.mutators",\n' +

'        "es6.modules",\n' +
'        "es6.regex.sticky",\n' +
'        "es6.regex.unicode",\n' +
'        "es6.tailCall",\n' +
'        "es6.templateLiterals",\n' +

'        "es7.decorators",\n' +
'        "es7.classProperties",\n' +
'        "es7.exportExtensions",\n' +
'        "es7.comprehensions",\n' +
'        "es7.asyncFunctions",\n' +
'        "es7.doExpressions",\n' +
'        "es7.exponentiationOperator",\n' +
'    ]\n' +
'}\n';

if ( !fs.existsSync(filename) ) {
    fs.writeFileSync(filename, whitelist);
}
