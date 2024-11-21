import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
function ValidationServerRendered() {
    const { Formik } = formik;
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (_jsx(Formik, { validationSchema: schema, onSubmit: console.log, initialValues: {
            firstName: 'Mark',
            lastName: 'Otto',
            username: '',
            city: '',
            state: '',
            zip: '',
            terms: false,
        }, children: ({ handleSubmit, handleChange, values, touched, errors }) => (_jsxs(Form, { noValidate: true, onSubmit: handleSubmit, children: [_jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "4", className: "mb-4 mb-md-0", controlId: "validationFormik01", children: [_jsx(Form.Label, { children: "First name" }), _jsx(Form.Control, { type: "text", name: "firstName", value: values.firstName, onChange: handleChange, isValid: touched.firstName && !errors.firstName }), _jsx(Form.Control.Feedback, { children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", className: "mb-4 mb-md-0", controlId: "validationFormik02", children: [_jsx(Form.Label, { children: "Last name" }), _jsx(Form.Control, { type: "text", name: "lastName", value: values.lastName, onChange: handleChange, isValid: touched.lastName && !errors.lastName }), _jsx(Form.Control.Feedback, { children: "Looks good!" })] }), _jsxs(Form.Group, { as: Col, md: "4", className: "mb-0 mb-md-0", controlId: "validationFormikUsername", children: [_jsx(Form.Label, { children: "Username" }), _jsxs(InputGroup, { hasValidation: true, children: [_jsx(InputGroup.Text, { id: "inputGroupPrepend", children: "@" }), _jsx(Form.Control, { type: "text", placeholder: "Username", "aria-describedby": "inputGroupPrepend", name: "username", value: values.username, onChange: handleChange, isInvalid: !!errors.username }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.username })] })] })] }), _jsxs(Row, { className: "mb-4", children: [_jsxs(Form.Group, { as: Col, md: "6", className: "mb-4 mb-md-0", controlId: "validationFormik03", children: [_jsx(Form.Label, { children: "City" }), _jsx(Form.Control, { type: "text", placeholder: "City", name: "city", value: values.city, onChange: handleChange, isInvalid: !!errors.city }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.city })] }), _jsxs(Form.Group, { as: Col, md: "3", className: "mb-4 mb-md-0", controlId: "validationFormik04", children: [_jsx(Form.Label, { children: "State" }), _jsx(Form.Control, { type: "text", placeholder: "State", name: "state", value: values.state, onChange: handleChange, isInvalid: !!errors.state }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.state })] }), _jsxs(Form.Group, { as: Col, md: "3", className: "mb-0 mb-md-0", controlId: "validationFormik05", children: [_jsx(Form.Label, { children: "Zip" }), _jsx(Form.Control, { type: "text", placeholder: "Zip", name: "zip", value: values.zip, onChange: handleChange, isInvalid: !!errors.zip }), _jsx(Form.Control.Feedback, { type: "invalid", children: errors.zip })] })] }), _jsx(Form.Group, { className: "mb-4", children: _jsx(Form.Check, { required: true, name: "terms", label: "Agree to terms and conditions", onChange: handleChange, isInvalid: !!errors.terms, feedback: errors.terms, feedbackType: "invalid", id: "validationFormik0" }) }), _jsx(Button, { type: "submit", children: "Submit form" })] })) }));
}
export default ValidationServerRendered;
