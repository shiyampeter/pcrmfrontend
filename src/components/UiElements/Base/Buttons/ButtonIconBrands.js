import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonBrandVariants } from './data/buttonData';
const ButtonIconBrands = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonBrandVariants.map(({ variant, iconClass }, index) => (_jsx(Button, { variant: variant, className: `btn-icon btn-${iconClass} rounded`, children: _jsx("i", { className: `fi ${iconClass}` }) }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonBrandVariants.map(({ variant, iconClass }, index) => (_jsx(Button, { variant: variant, className: `btn-icon btn-${iconClass}`, children: _jsx("i", { className: `fi ${iconClass}` }) }, index))) })] }));
};
export default ButtonIconBrands;
