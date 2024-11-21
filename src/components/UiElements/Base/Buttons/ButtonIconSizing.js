import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonSizingVariants } from './data/buttonData';
const ButtonWithIcon = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSizingVariants.map(({ variant, size }, index) => (_jsx(Button, { variant: variant, className: `btn-icon rounded btn-${size}`, children: _jsx("i", { className: "fi fi-rr-bell" }) }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSizingVariants.map(({ variant, size }, index) => (_jsx(Button, { variant: variant, className: `btn-icon btn-${size}`, children: _jsx("i", { className: "fi fi-rr-bell" }) }, index))) })] }));
};
export default ButtonWithIcon;
