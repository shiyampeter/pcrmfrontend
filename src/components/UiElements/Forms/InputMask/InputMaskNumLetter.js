import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InputMask from 'react-input-mask';
import { Form } from 'react-bootstrap';
const InputMaskNumLetter = () => {
    return (_jsxs(_Fragment, { children: [_jsx(InputMask, { mask: "9999-aaaa", maskChar: null, className: "form-control" }), _jsxs(Form.Text, { children: ["Phone format: ", _jsx("code", { children: "xxsx.aaaa" })] })] }));
};
export default InputMaskNumLetter;
