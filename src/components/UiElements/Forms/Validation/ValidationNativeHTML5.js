import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
function ValidationNativeHTML5() {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (_jsxs(Form, { noValidate: true, validated: validated, onSubmit: handleSubmit, children: [_jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "4", className: "mb-4 mb-md-0", controlId: "validationCustom01", children: [_jsx(Form.Label, { children: "First name" }), _jsx(Form.Control, { required: true, type: "text", placeholder: "First name", defaultValue: "Mark" }), _jsx(Form.Control.Feedback, { children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", className: "mb-4 mb-md-0", controlId: "validationCustom02", children: [_jsx(Form.Label, { children: "Last name" }), _jsx(Form.Control, { required: true, type: "text", placeholder: "Last name", defaultValue: "Otto" }), _jsx(Form.Control.Feedback, { children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", className: "mb-0 mb-md-0", controlId: "validationCustomUsername", children: [_jsx(Form.Label, { children: "Username" }), _jsxs(InputGroup, { hasValidation: true, children: [_jsx(InputGroup.Text, { id: "inputGroupPrepend", children: "@" }), _jsx(Form.Control, { type: "text", placeholder: "Username", "aria-describedby": "inputGroupPrepend", required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please choose a username." })] })] })] }), _jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "6", className: "mb-4 mb-md-0", controlId: "validationCustom03", children: [_jsx(Form.Label, { children: "City" }), _jsx(Form.Control, { type: "text", placeholder: "City", required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide a valid city." })] }), _jsxs(Form.Group, { as: Col, md: "3", className: "mb-4 mb-md-0", controlId: "validationCustom04", children: [_jsx(Form.Label, { children: "State" }), _jsx(Form.Control, { type: "text", placeholder: "State", required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide a valid state." })] }), _jsxs(Form.Group, { as: Col, md: "3", className: "mb-0 mb-md-0", controlId: "validationCustom05", children: [_jsx(Form.Label, { children: "Zip" }), _jsx(Form.Control, { type: "text", placeholder: "Zip", required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please provide a valid zip." })] })] }), _jsx(Form.Group, { className: "mb-4 mb-md-6 mb-md-lg-8", children: _jsx(Form.Check, { required: true, label: "Agree to terms and conditions", feedback: "You must agree before submitting.", feedbackType: "invalid" }) }), _jsx(Button, { type: "submit", children: "Submit form" })] }));
}
export default ValidationNativeHTML5;
