import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonVariants } from './data/buttonData';
const ButtonWithIcon = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonVariants.map(({ variant, text }, index) => (_jsxs(Button, { variant: variant, children: [_jsx("i", { className: "fi fi-rr-bell" }), _jsx("span", { className: "ms-2", children: text })] }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonVariants.map(({ variant, text }, index) => (_jsxs(Button, { variant: variant, className: "rounded-pill", children: [_jsx("i", { className: "fi fi-rr-bell" }), _jsx("span", { className: "ms-2", children: text })] }, index))) })] }));
};
export default ButtonWithIcon;
