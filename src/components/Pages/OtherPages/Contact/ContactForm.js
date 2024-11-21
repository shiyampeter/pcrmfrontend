import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { toast, Toaster } from 'react-hot-toast';
const ContactForm = () => {
    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const isFormValid = Object.values(formErrors).every((error) => !error) &&
            Object.values(formData).every((value) => value !== '');
        setIsFormValid(isFormValid);
    }, [formData, formErrors]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: value === '' ? `${name} is required` : '',
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid) {
            setIsLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 2000));
                toast.success('Message sent successfully!');
                setFormData(initialFormData);
            }
            catch (error) {
                toast.error('Error sending the message. Please try again.');
            }
            finally {
                setIsLoading(false);
            }
        }
        else {
            toast.error('Please fill in all required fields');
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Card, { className: "mx-4 mx-md-6 border-0", children: _jsxs(Card.Body, { className: "p-4 p-md-12 p-lg-16 w-100 mx-auto rounded-5 bg-secondary-subtle z-1 shadow-sm border", style: { maxWidth: '768px', marginBottom: '-150px' }, children: [_jsx("h3", { children: "Get in touch" }), _jsx("p", { children: "Our friendly team would love to hear from you." }), _jsxs(Form, { className: "mt-12", onSubmit: handleSubmit, children: [_jsxs(Row, { className: "g-4 mb-4", children: [_jsxs(Col, { md: 6, children: [_jsx(Form.Label, { children: "Firstname" }), _jsx(Form.Control, { type: "text", name: "firstName", value: formData.firstName, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.firstName })] }), _jsxs(Col, { md: 6, children: [_jsx(Form.Label, { children: "Lastname" }), _jsx(Form.Control, { type: "text", name: "lastName", value: formData.lastName, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.lastName })] }), _jsxs(Col, { md: 6, children: [_jsx(Form.Label, { children: "Emial" }), _jsx(Form.Control, { type: "email", name: "email", value: formData.email, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.email })] }), _jsxs(Col, { md: 6, children: [_jsx(Form.Label, { children: "Phone" }), _jsx(Form.Control, { type: "text", name: "phone", value: formData.phone, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.phone })] }), _jsxs(Col, { md: 12, children: [_jsx(Form.Label, { children: "Subject" }), _jsx(Form.Control, { type: "text", name: "subject", value: formData.subject, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.subject })] }), _jsxs(Col, { md: 12, children: [_jsx(Form.Label, { children: "Message" }), _jsx(Form.Control, { as: "textarea", rows: 5, name: "message", value: formData.message, onChange: handleInputChange }), _jsx("div", { className: "fs-12 text-danger", children: formErrors.message })] })] }), _jsx(Button, { type: "submit", size: "lg", className: "w-100 text-white", disabled: !isFormValid || isLoading, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Sending..."] })) : ('Send Message') })] })] }) }), _jsx(Toaster, { position: "top-center" })] }));
};
export default ContactForm;
