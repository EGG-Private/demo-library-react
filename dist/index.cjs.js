'use strict';

var jsxRuntime = require('react/jsx-runtime');

function Button({ label, onClick }) {
    return jsxRuntime.jsx("button", { onClick: onClick, children: label });
}

exports.Button = Button;
//# sourceMappingURL=index.cjs.js.map
