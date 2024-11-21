import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonVariants, buttonSoftVariants } from './data/buttonData';
const ButtonIconSolid = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, className: "btn-icon", children: _jsx("i", { className: "fi fi-rr-bell" }) }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSoftVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, className: "btn-icon rounded-pill", children: _jsx("i", { className: "fi fi-rr-bell" }) }, index))) })] }));
};
export default ButtonIconSolid;
