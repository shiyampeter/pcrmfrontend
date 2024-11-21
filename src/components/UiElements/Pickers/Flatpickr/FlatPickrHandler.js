import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
class FlatPickrHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
    }
    render() {
        return (_jsx(Flatpickr, { value: "2023-12-05 01:01", "data-enable-time": true, options: { wrap: true }, onChange: (_, str) => console.info(str), children: _jsxs(InputGroup, { children: [_jsx(InputGroup.Text, { "data-toggle": true, children: _jsx("i", { className: "fi fi-rr-calendar-clock" }) }), _jsx(Form.Control, { "data-input": true, type: "text", placeholder: "Select date..." }), _jsx(InputGroup.Text, { "data-clear": true, children: _jsx("i", { className: "fi fi-rr-cross-circle" }) })] }) }));
    }
}
export default FlatPickrHandler;
