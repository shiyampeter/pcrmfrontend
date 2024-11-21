import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import InputMask from 'react-input-mask';
import { Form } from 'react-bootstrap';
const InputMaskDate = () => {
    return (_jsxs(_Fragment, { children: [_jsx(InputMask, { mask: "99-99-9999", defaultValue: "21-12-2023", className: "form-control" }), _jsxs(Form.Text, { children: ["Phone format: ", _jsx("code", { children: "xx-xx-xxxx" })] })] }));
};
export default InputMaskDate;
