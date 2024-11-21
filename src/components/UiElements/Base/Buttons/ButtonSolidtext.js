import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Stack } from 'react-bootstrap';
import { buttonSolidTextVariants } from './data/buttonData';
const ButtonSolidtext = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSolidTextVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, children: text }, index))) }), _jsx("hr", { className: "my-4" }), _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: buttonSolidTextVariants.map(({ variant, text }, index) => (_jsx(Button, { variant: variant, className: "rounded-pill", children: text }, index))) })] }));
};
export default ButtonSolidtext;
