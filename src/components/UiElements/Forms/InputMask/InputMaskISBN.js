import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InputMask from 'react-input-mask';
import { Form } from 'react-bootstrap';
const InputMaskISBN = () => {
    return (_jsxs(_Fragment, { children: [_jsx(InputMask, { mask: "999-99-999-9999-9", maskChar: null, className: "form-control" }), _jsxs(Form.Text, { children: ["Phone format: ", _jsx("code", { children: "xxx-xx-xxx-xxxx-x" })] })] }));
};
export default InputMaskISBN;