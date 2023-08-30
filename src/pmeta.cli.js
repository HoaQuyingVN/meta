// Node.js program to demonstrate the
// util.deprecate() method
 
// Import the util module
const util = require('util');
 
const deprecateFunction = util.deprecate(
    // Function which is deprecated
    function () { },
 
    // Warning message that is
    // printed to stderr
    "The library '/npmcli/' has disabled, try use our new library: meta -u"
    // Deprecated API
    'pmeta <warn> Deprecated_ERR'
);
 
// Function call
deprecateFunction();
