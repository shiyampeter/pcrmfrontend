import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import { Form, Row, Col } from 'react-bootstrap';
import 'flatpickr/dist/themes/airbnb.css';
class AccountInformation extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "handleChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (dates) => {
                const [date] = dates;
                this.setState({ date });
            }
        });
        this.state = {
            date: new Date(),
        };
    }
    render() {
        return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-6 mb-md-12", children: [_jsx("h5", { className: "fw-semibold", children: "Personal Information" }), _jsx("p", { children: "Basic info, like your name and address that will displayed in public" })] }), _jsxs(Form, { children: [_jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Fullname" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "text", placeholder: "Fullname" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Username" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "url", placeholder: "Username" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Email" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "email", placeholder: "Email" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Address" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "tel", placeholder: "Address" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Phone" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "tel", placeholder: "Phone" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Date of Birth" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Flatpickr, { onChange: this.handleChange, className: "form-control", placeholder: "Select date..." }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Website" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "url", placeholder: "Website" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "About" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { as: "textarea", style: { height: '100px' }, placeholder: "About" }) })] })] })] }));
    }
}
export default AccountInformation;
