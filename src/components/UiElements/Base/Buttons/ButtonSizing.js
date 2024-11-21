import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonSizingVariants } from './data/buttonData';
const ButtonSizing = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSizingVariants.map(({ size }, index) => (_jsxs(Button, { variant: "primary", className: `btn-${size}`, children: ["button-", size] }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSizingVariants.map(({ size }, index) => (_jsxs(Button, { variant: "primary", className: `btn-${size} rounded-pill`, children: ["button-", size] }, index))) })] }));
};
export default ButtonSizing;
