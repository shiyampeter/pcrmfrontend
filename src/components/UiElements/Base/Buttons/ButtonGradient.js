import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonGradientVariants } from './data/buttonData';
const ButtonGradient = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonGradientVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, className: "bg-gradient", children: text }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonGradientVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, className: "rounded-pill bg-gradient", children: text }, index))) })] }));
};
export default ButtonGradient;
