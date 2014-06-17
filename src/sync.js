var map = {
    'foo': function() {
        return 1;
    },
    'buz': function() {
        return 2;
    }
};

module.exports = {
    foo: function(bar) {
        if (bar > 5) {
            return 2 * bar * bar;
        } else if (bar <= 5 && bar > 0) {
            return bar * bar;
        } else {
            return 2 * bar;
        }
    },

    baz: function(type) {
        return map[type]();
    }
};
