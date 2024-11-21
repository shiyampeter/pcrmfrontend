import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { Form } from 'react-bootstrap';
const InputMaskCard = () => {
    const [state, setState] = useState({
        value: '',
        mask: '9999-9999-9999-9999',
    });
    const onChange = (event) => {
        const value = event.target.value;
        const newState = {
            mask: '9999-9999-9999-9999',
            value: value,
        };
        if (/^3[47]/.test(value)) {
            newState.mask = '9999-999999-99999';
        }
        setState(newState);
    };
    return (_jsxs(_Fragment, { children: [_jsx(InputMask, { ...state, onChange: onChange, className: "form-control" }), _jsxs(Form.Text, { children: ["Credit Card format: ", _jsx("code", { children: "xxxx-xxxx-xxxx-xxxx" })] })] }));
};
export default InputMaskCard;
