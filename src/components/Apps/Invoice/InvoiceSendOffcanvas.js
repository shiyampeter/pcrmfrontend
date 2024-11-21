import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Form, Offcanvas, Stack } from 'react-bootstrap';
import toast from 'react-hot-toast';
const InvoiceSendOffcanvas = ({ showSendOptions, handleCloseSendOptions, }) => {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [toError, setToError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'to') {
            setTo(value);
            setToError('');
        }
        else if (name === 'subject') {
            setSubject(value);
            setSubjectError('');
        }
        else if (name === 'message') {
            setMessage(value);
            setMessageError('');
        }
    };
    const validateForm = () => {
        let valid = true;
        if (!to.trim()) {
            setToError('To field is required');
            valid = false;
        }
        else if (!emailRegex.test(to)) {
            setToError('Invalid email address');
            valid = false;
        }
        if (!subject.trim()) {
            setSubjectError('Subject field is required');
            valid = false;
        }
        if (!message.trim()) {
            setMessageError('Message field is required');
            valid = false;
        }
        return valid;
    };
    const handleSendClick = async () => {
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Invoice sent successfully!');
            handleCloseSendOptions();
            resetForm();
        }, 2000);
    };
    const resetForm = () => {
        setTo('');
        setSubject('');
        setMessage('');
        setToError('');
        setSubjectError('');
        setMessageError('');
    };
    return (_jsx(_Fragment, { children: _jsxs(Offcanvas, { show: showSendOptions, onHide: handleCloseSendOptions, placement: "end", children: [_jsx(Offcanvas.Header, { closeButton: true, children: _jsx(Offcanvas.Title, { children: "Send Invoice" }) }), _jsxs(Offcanvas.Body, { children: [_jsxs(Form.Group, { className: "mb-6", controlId: "exampleForm.ControlInputFrom", children: [_jsx(Form.Label, { children: "Invoice:" }), _jsx(Form.Control, { type: "text", placeholder: "Invoice number", disabled: true, readOnly: true, defaultValue: "#INV-987456" })] }), _jsxs(Form.Group, { className: "mb-6", controlId: "exampleForm.ControlInputFrom", children: [_jsx(Form.Label, { children: "From:" }), _jsx(Form.Control, { type: "email", placeholder: "wrapcoders@gmail.com", disabled: true, readOnly: true })] }), _jsxs(Form.Group, { className: "mb-6", controlId: "formTo", children: [_jsx(Form.Label, { children: "To:" }), _jsx(Form.Control, { type: "email", placeholder: "Invoice to....", name: "to", value: to, onChange: handleInputChange, isInvalid: toError !== '' }), _jsx(Form.Control.Feedback, { type: "invalid", children: toError })] }), _jsxs(Form.Group, { className: "mb-6", controlId: "formSubject", children: [_jsx(Form.Label, { children: "Subject:" }), _jsx(Form.Control, { type: "text", placeholder: "Subject....", name: "subject", value: subject, onChange: handleInputChange, isInvalid: subjectError !== '' }), _jsx(Form.Control.Feedback, { type: "invalid", children: subjectError })] }), _jsxs(Form.Group, { className: "mb-12", controlId: "formMessage", children: [_jsx(Form.Label, { children: "Message:" }), _jsx(Form.Control, { as: "textarea", rows: 5, placeholder: "Message....", name: "message", value: message, onChange: handleInputChange, isInvalid: messageError !== '' }), _jsx(Form.Control.Feedback, { type: "invalid", children: messageError })] }), _jsxs(Stack, { gap: 2, direction: "horizontal", children: [_jsx(Button, { variant: "primary", onClick: handleSendClick, className: "text-white w-50", disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-paper-plane me-2 fs-14" }), "Send"] })) }), _jsxs(Button, { variant: "danger", onClick: () => {
                                        handleCloseSendOptions();
                                        resetForm();
                                    }, className: " w-50", children: [_jsx("i", { className: "fi fi-rr-trash me-2 fs-14" }), "Cancel"] })] })] })] }) }));
};
export default InvoiceSendOffcanvas;
