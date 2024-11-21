import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InputMask from 'react-input-mask';
import { Form } from 'react-bootstrap';
const InputMaskPhone2 = () => {
    return (_jsxs(_Fragment, { children: [_jsx(InputMask, { mask: "+7 (999) 999-99-99", className: "form-control" }), _jsxs(Form.Text, { children: ["Phone format: ", _jsx("code", { children: "(xxx) xxx-xxxx" })] })] }));
};
export default InputMaskPhone2;
