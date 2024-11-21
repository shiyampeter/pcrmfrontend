import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Select from 'react-select';
import { CustomSelectOption, CustomMultiValue, } from '@/components/UiElements/Extended/Selects/Components/CustomMultipleComponent';
import { CustomImageOptions } from '@/components/UiElements/Extended/Selects/data';
import 'react-quill/dist/quill.snow.css';
const ComposeEmailModal = ({ show, onHide, onCompose }) => {
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [isCCVisible, setCCVisible] = useState(false);
    const [isBCCVisible, setBCCVisible] = useState(false);
    const [toError, setToError] = useState('');
    const [ccError, setCCError] = useState('');
    const [bccError, setBCCError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [bodyError, setBodyError] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedToOption, setSelectedToOption] = useState(null);
    const [selectedCCOption, setSelectedCCOption] = useState(null);
    const [selectedBCCOption, setSelectedBCCOption] = useState(null);
    const handleReset = () => {
        setSubject('');
        setBody('');
        setCCVisible(false);
        setBCCVisible(false);
        setToError('');
        setCCError('');
        setBCCError('');
        setSubjectError('');
        setBodyError('');
        setSelectedToOption(null);
        setSelectedCCOption(null);
        setSelectedBCCOption(null);
    };
    const handleCompose = () => {
        setToError('');
        setCCError('');
        setBCCError('');
        setSubjectError('');
        setBodyError('');
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!selectedToOption ||
            !selectedToOption.length ||
            !selectedToOption.every((option) => option.value && emailRegex.test(option.value))) {
            setToError('Please enter valid email address(es).');
            isValid = false;
        }
        if (isCCVisible &&
            (!selectedCCOption ||
                !selectedCCOption.length ||
                !selectedCCOption.every((option) => option.value && emailRegex.test(option.value)))) {
            setCCError('Please enter valid CC email address(es).');
            isValid = false;
        }
        if (isBCCVisible &&
            (!selectedBCCOption ||
                !selectedBCCOption.length ||
                !selectedBCCOption.every((option) => option.value && emailRegex.test(option.value)))) {
            setBCCError('Please enter valid BCC email address(es).');
            isValid = false;
        }
        if (!subject) {
            setSubjectError('Please enter the subject.');
            isValid = false;
        }
        if (!body) {
            setBodyError('Please enter the message body.');
            isValid = false;
        }
        if (isValid) {
            setLoading(true);
            setTimeout(() => {
                const emailData = {
                    to: selectedToOption.value,
                    subject,
                    body,
                };
                onCompose(emailData);
                toast.success('Email sent successfully');
                handleReset();
                setLoading(false);
                onHide();
            }, 2000);
        }
    };
    const quillModules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
        ],
    };
    const quillFormats = ['bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image'];
    return (_jsx(_Fragment, { children: _jsxs(Modal, { show: show, onHide: onHide, centered: true, size: "lg", children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "New Message" }) }), _jsx(Modal.Body, { children: _jsxs(Form, { children: [_jsxs(Form.Group, { className: "mb-4 position-relative w-100", children: [_jsxs("span", { className: "me-1 fs-12 hstack gap-3 position-absolute end-0", children: [_jsx(Link, { to: "", className: "text-muted", onClick: () => setCCVisible(!isCCVisible), children: "CC" }), _jsx(Link, { to: "", className: "text-muted", onClick: () => setBCCVisible(!isBCCVisible), children: "BCC" })] }), _jsx(Form.Label, { children: "To" }), ' ', _jsx(Select, { isMulti: true, isSearchable: true, placeholder: "", options: CustomImageOptions, classNamePrefix: "select", components: {
                                            Option: CustomSelectOption,
                                            MultiValue: CustomMultiValue,
                                        }, value: selectedToOption, onChange: (selectedOption) => setSelectedToOption(selectedOption), className: toError ? 'is-invalid' : '' }), toError && _jsx(Form.Control.Feedback, { type: "invalid", children: toError })] }), isCCVisible && (_jsxs(Form.Group, { className: "mb-4", children: [_jsx(Form.Label, { children: "Cc" }), _jsx(Select, { isMulti: true, isSearchable: true, placeholder: "", options: CustomImageOptions, classNamePrefix: "select", components: {
                                            Option: CustomSelectOption,
                                            MultiValue: CustomMultiValue,
                                        }, value: selectedCCOption, onChange: (selectedOption) => setSelectedCCOption(selectedOption), className: ccError ? 'is-invalid' : '' }), ccError && _jsx(Form.Control.Feedback, { type: "invalid", children: ccError })] })), isBCCVisible && (_jsxs(Form.Group, { className: "mb-4", children: [_jsx(Form.Label, { children: "Bcc" }), _jsx(Select, { isMulti: true, isSearchable: true, placeholder: "", options: CustomImageOptions, classNamePrefix: "select", components: {
                                            Option: CustomSelectOption,
                                            MultiValue: CustomMultiValue,
                                        }, value: selectedBCCOption, onChange: (selectedOption) => setSelectedBCCOption(selectedOption), className: bccError ? 'is-invalid' : '' }), bccError && (_jsx(Form.Control.Feedback, { type: "invalid", children: bccError }))] })), _jsxs(Form.Group, { className: "mb-4", children: [_jsx(Form.Label, { children: "Subject" }), _jsx(Form.Control, { type: "text", value: subject, onChange: (e) => setSubject(e.target.value), isInvalid: !!subjectError }), _jsx(Form.Control.Feedback, { type: "invalid", children: subjectError })] }), _jsxs(Form.Group, { children: [_jsx(Form.Label, { children: "Message" }), _jsx(ReactQuill, { value: body, onChange: (value) => setBody(value), modules: quillModules, formats: quillFormats, theme: "snow", className: bodyError ? 'is-invalid' : '' }), bodyError && _jsx("div", { className: "invalid-feedback", children: bodyError })] })] }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "text-danger", onClick: () => {
                                handleReset();
                                onHide();
                            }, children: "Discard" }), _jsx(Button, { variant: "primary", onClick: handleCompose, className: "text-white", disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-paper-plane me-2 fs-14" }), "Send"] })) })] })] }) }));
};
export default ComposeEmailModal;
