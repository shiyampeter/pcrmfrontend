import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonBrandVariants } from './data/buttonData';
const ButtonBrandsWithIcon = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonBrandVariants.map(({ variant, iconClass, text }, index) => (_jsxs(Button, { variant: variant, className: `btn-${iconClass} rounded`, children: [_jsx("i", { className: `fi ${iconClass}` }), _jsx("span", { className: "ms-2", children: text })] }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonBrandVariants.map(({ variant, iconClass, text }, index) => (_jsxs(Button, { variant: variant, className: `btn-${iconClass}`, children: [_jsx("i", { className: `fi ${iconClass}` }), _jsx("span", { className: "ms-2", children: text })] }, index))) })] }));
};
export default ButtonBrandsWithIcon;
