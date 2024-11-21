import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
function ValidationTooltips() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        file: yup.mixed().required(),
        terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
    });
    return (_jsx(Formik, { validationSchema: schema, onSubmit: console.log, initialValues: {
            firstName: 'Mark',
            lastName: 'Otto',
            username: '',
            city: '',
            state: '',
            zip: '',
            file: null,
            terms: false,
        }, children: ({ handleSubmit, handleChange, values, touched, errors }) => (_jsxs(Form, { noValidate: true, onSubmit: handleSubmit, children: [_jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "4", controlId: "validationFormik101", className: "mb-4 mb-md-0 position-relative", children: [_jsx(Form.Label, { children: "First name" }), _jsx(Form.Control, { type: "text", name: "firstName", value: values.firstName, onChange: handleChange, isValid: touched.firstName && !errors.firstName }), _jsx(Form.Control.Feedback, { tooltip: true, children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", controlId: "validationFormik102", className: "mb-4 mb-md-0 position-relative", children: [_jsx(Form.Label, { children: "Last name" }), _jsx(Form.Control, { type: "text", name: "lastName", value: values.lastName, onChange: handleChange, isValid: touched.lastName && !errors.lastName }), _jsx(Form.Control.Feedback, { tooltip: true, children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", className: "mb-0 mb-md-0", controlId: "validationFormikUsername2", children: [_jsx(Form.Label, { children: "Username" }), _jsxs(InputGroup, { hasValidation: true, children: [_jsx(InputGroup.Text, { id: "inputGroupPrepend", children: "@" }), _jsx(Form.Control, { type: "text", placeholder: "Username", "aria-describedby": "inputGroupPrepend", name: "username", value: values.username, onChange: handleChange, isInvalid: !!errors.username }), _jsx(Form.Control.Feedback, { type: "invalid", tooltip: true, children: errors.username })] })] })] }), _jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "6", controlId: "validationFormik103", className: "mb-4 mb-md-0 position-relative", children: [_jsx(Form.Label, { children: "City" }), _jsx(Form.Control, { type: "text", placeholder: "City", name: "city", value: values.city, onChange: handleChange, isInvalid: !!errors.city }), _jsx(Form.Control.Feedback, { type: "invalid", tooltip: true, children: errors.city })] }), _jsxs(Form.Group, { as: Col, md: "3", controlId: "validationFormik104", className: "mb-4 mb-md-0 position-relative", children: [_jsx(Form.Label, { children: "State" }), _jsx(Form.Control, { type: "text", placeholder: "State", name: "state", value: values.state, onChange: handleChange, isInvalid: !!errors.state }), _jsx(Form.Control.Feedback, { type: "invalid", tooltip: true, children: errors.state })] }), _jsxs(Form.Group, { as: Col, md: "3", controlId: "validationFormik105", className: "mb-4 mb-md-0 position-relative", children: [_jsx(Form.Label, { children: "Zip" }), _jsx(Form.Control, { type: "text", placeholder: "Zip", name: "zip", value: values.zip, onChange: handleChange, isInvalid: !!errors.zip }), _jsx(Form.Control.Feedback, { type: "invalid", tooltip: true, children: errors.zip })] })] }), _jsxs(Form.Group, { className: "mb-4 position-relative", children: [_jsx(Form.Label, { children: "File" }), _jsx(Form.Control, { type: "file", required: true, name: "file", onChange: handleChange, isInvalid: !!errors.file }), _jsx(Form.Control.Feedback, { type: "invalid", tooltip: true, children: errors.file })] }), _jsx(Form.Group, { className: "mb-4 position-relative", children: _jsx(Form.Check, { required: true, name: "terms", label: "Agree to terms and conditions", onChange: handleChange, isInvalid: !!errors.terms, feedback: errors.terms, feedbackType: "invalid", id: "validationFormik106", feedbackTooltip: true }) }), _jsx(Button, { type: "submit", children: "Submit form" })] })) }));
}
export default ValidationTooltips;
