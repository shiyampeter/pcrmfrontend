import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const AddContactModal = ({ show, onHide, onAddContact }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        role: '',
        location: '',
        website: '',
        label: '',
        about: '',
    });
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const avatarImageRef = React.useRef(null);
    const avatarImageUploader = React.useRef(null);
    const handleImageUpload = (e, setImageFile, imageRef, imageUploader) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = (event) => {
                const currentImage = imageRef.current;
                if (currentImage) {
                    currentImage.src = event.target?.result;
                }
            };
            reader.readAsDataURL(file);
        }
    };
    const handleReset = (setImageFile, imageRef, imageUploader) => {
        setImageFile(null);
        const defaultImageSrc = 'https://via.placeholder.com/150'; // Replace with a valid image URL
        const currentImage = imageRef.current;
        if (currentImage) {
            currentImage.src = defaultImageSrc;
        }
        if (imageUploader.current) {
            imageUploader.current.value = '';
        }
    };
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleAddContact = (e) => {
        e.preventDefault();
        const form = document.getElementById('addContactForm');
        setValidated(true);
        if (form.checkValidity()) {
            setLoading(true);
            setTimeout(() => {
                onAddContact(formData);
                setLoading(false);
                handleDiscard();
                toast.success('Contact added successfully!');
            }, 2000);
        }
    };
    const handleDiscard = () => {
        const form = document.getElementById('addContactForm');
        onHide();
        setValidated(false);
        if (form) {
            form.reset();
        }
        handleReset(setAvatarFile, avatarImageRef, avatarImageUploader);
    };
    return (_jsx(_Fragment, { children: _jsxs(Modal, { show: show, onHide: onHide, centered: true, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Add New Contact" }) }), _jsx(Modal.Body, { children: _jsx(Form, { noValidate: true, id: "addContactForm", validated: validated, onSubmit: handleAddContact, children: _jsxs(Row, { className: "gy-6 gx-4", children: [_jsxs(Col, { lg: 12, className: "hstack gap-4", children: [_jsx("div", { className: "mb-0 text-muted", children: "Avatar" }), _jsxs("div", { children: [_jsx("input", { type: "file", accept: "image/*", onChange: (e) => handleImageUpload(e, setAvatarFile, avatarImageRef, avatarImageUploader), ref: (input) => (avatarImageUploader.current = input), style: {
                                                        display: 'none',
                                                    } }), _jsx("div", { style: {
                                                        height: '6rem',
                                                        width: '6rem',
                                                        cursor: 'pointer',
                                                    }, className: "d-flex align-items-center justify-content-center fs-24 border border-3 rounded overflow-hidden bg-secondary-subtle", onClick: () => avatarImageUploader.current?.click(), children: avatarFile ? (_jsx("img", { src: URL.createObjectURL(avatarFile), ref: avatarImageRef, className: "rounded", style: {
                                                            width: '100%',
                                                            height: '100%',
                                                            position: 'relative',
                                                        } })) : (_jsx(FiPlus, {})) }), _jsxs("p", { className: "text-muted mt-2", children: ["Click to change avatar image", ' - ', _jsx(Link, { to: "#!", className: "text-danger", onClick: () => handleReset(setAvatarFile, avatarImageRef, avatarImageUploader), children: "Reset" })] })] })] }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "text", name: "firstname", onChange: handleInputChange, required: true, isInvalid: validated && !formData.firstname, placeholder: "First Name...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the first name." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "text", name: "lastname", onChange: handleInputChange, required: true, isInvalid: validated && !formData.lastname, placeholder: "Last Name...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the last name." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "tel", name: "phone", onChange: handleInputChange, required: true, isInvalid: validated && !formData.phone, placeholder: "Phone...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the phone number." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "text", name: "role", onChange: handleInputChange, required: true, isInvalid: validated && !formData.role, placeholder: "Role...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the role." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "text", name: "location", onChange: handleInputChange, required: true, isInvalid: validated && !formData.location, placeholder: "Location...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the location." })] }) }), _jsx(Col, { lg: 6, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { type: "url", name: "website", onChange: handleInputChange, required: true, isInvalid: validated && !formData.website, placeholder: "Website...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the website." })] }) }), _jsx(Col, { lg: 12, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { as: "textarea", rows: 3, name: "about", onChange: handleInputChange, required: true, isInvalid: validated && !formData.about, placeholder: "About...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the about." })] }) }), _jsx(Col, { lg: 12, children: _jsxs(Form.Group, { children: [_jsx(Form.Control, { as: "textarea", rows: 3, name: "message", onChange: handleInputChange, placeholder: "Message...." }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Please enter the message." })] }) })] }) }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "text-danger", onClick: handleDiscard, children: "Discard" }), _jsx(Button, { variant: "primary", onClick: handleAddContact, className: `text-white ${loading ? 'disabled' : ''}`, disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Adding..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-plus me-2 fs-14" }), "Add Contact"] })) })] })] }) }));
};
export default AddContactModal;
