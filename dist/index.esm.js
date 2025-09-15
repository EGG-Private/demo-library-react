import { jsx } from 'react/jsx-runtime';

function Button({ label, onClick }) {
    return jsx("button", { onClick: onClick, children: label });
}

export { Button };
//# sourceMappingURL=index.esm.js.map
