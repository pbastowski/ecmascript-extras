// Provides support for es7.decorators
babelHelpers.defineDecoratedPropertyDescriptor = function (target, key, descriptors) {
    var _descriptor = descriptors[key];
    if (!_descriptor) return;
    var descriptor = {};

    for (var _key in _descriptor) descriptor[_key] = _descriptor[_key];

    descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined;
    Object.defineProperty(target, key, descriptor);
};

// Provides support for es7.decorators
babelHelpers.createDecoratedClass = (function () {
    function defineProperties(target, descriptors, initializers) {
        for (var i = 0; i < descriptors.length; i++) {
            var descriptor = descriptors[i];
            var decorators = descriptor.decorators;
            var key = descriptor.key;
            delete descriptor.key;
            delete descriptor.decorators;
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor || descriptor.initializer) descriptor.writable = true;
            if (decorators) {
                for (var f = 0; f < decorators.length; f++) {
                    var decorator = decorators[f];
                    if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); }
                }
                if (descriptor.initializer !== undefined) {
                    initializers[key] = descriptor;
                    continue;
                }
            }
            Object.defineProperty(target, key, descriptor);
        }
    }

    return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers);
        if (staticProps) defineProperties(Constructor, staticProps, staticInitializers);
        return Constructor;
    };
})();

babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
};

