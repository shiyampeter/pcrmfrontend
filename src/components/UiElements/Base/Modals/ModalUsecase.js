import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Stack } from 'react-bootstrap';
const ModalUsecase = () => {
    const [modals, setModals] = useState({
        showUsecaseSuccess: false,
        showUsecaseDanger: false,
        showUsecaseWarning: false,
        showUsecaseInfo: false,
    });
    const handleClose = (modal) => setModals({ ...modals, [modal]: false });
    const handleShow = (modal) => setModals({ ...modals, [modal]: true });
    const usecaseModals = [
        {
            variant: 'success',
            title: 'Congratulations!',
            icon: 'fi-rr-badge-check',
            body: (_jsxs(_Fragment, { children: [_jsxs("p", { className: "lead", children: ["You've successfully bought ", _jsx("strong", { children: "0.365 BTC" }), " for ", _jsx("strong", { children: "$350 USD" }), "."] }), _jsxs("p", { children: ["Learn when you receive bitcoin in your wallet.", _jsx(Link, { to: "#", children: " Click here" })] })] })),
            buttonText: 'OK',
            onClick: () => handleClose('showUsecaseSuccess'),
        },
        {
            variant: 'danger',
            title: 'Unable to Process!',
            icon: 'fi-rr-circle-xmark',
            body: (_jsxs(_Fragment, { children: [_jsx("p", { className: "lead", children: "We are sorry, we were unable to process your payment. Please try again later." }), _jsxs("p", { children: ["If you need help, please contact us at ", _jsx(Link, { to: "#", children: "support@themeswift.com" }), "."] })] })),
            buttonText: 'Return',
            onClick: () => handleClose('showUsecaseDanger'),
        },
        {
            variant: 'warning',
            title: 'Reset your Password!',
            icon: 'fi-rr-triangle-warning',
            body: (_jsxs(_Fragment, { children: [_jsx("p", { className: "lead", children: "Enter your email and a reset link will be sent to you." }), _jsx("form", { children: _jsx("input", { type: "email", className: "form-control", placeholder: "Email for password reset link", required: true }) })] })),
            buttonText: 'Reset Now',
            onClick: () => handleClose('showUsecaseWarning'),
        },
        {
            variant: 'info',
            title: 'Incorrect Information!',
            icon: 'fi-rr-info',
            body: (_jsx(_Fragment, { children: _jsx("p", { className: "lead", children: "In this example, you can see a form where you can request some additional information from the customer when they land on the app page." }) })),
            buttonText: 'Continue',
            onClick: () => handleClose('showUsecaseInfo'),
        },
    ];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: usecaseModals.map((modal, index) => (_jsxs(React.Fragment, { children: [_jsxs(Button, { variant: modal.variant, onClick: () => handleShow(`showUsecase${modal.variant.charAt(0).toUpperCase() + modal.variant.slice(1)}`), children: ["Usecase ", modal.variant.charAt(0).toUpperCase() + modal.variant.slice(1)] }), _jsx(Modal, { show: modals[`showUsecase${modal.variant.charAt(0).toUpperCase() + modal.variant.slice(1)}`], onHide: () => handleClose(`showUsecase${modal.variant.charAt(0).toUpperCase() + modal.variant.slice(1)}`), centered: true, children: _jsxs(Modal.Body, { className: "modal-body text-center mx-auto py-4 px-4 py-md-16 px-md-16", children: [_jsx("div", { className: `bg-${modal.variant}-subtle text-${modal.variant} rounded-circle d-flex align-items-center justify-content-center mx-auto mb-5`, style: { width: '5rem', height: '5rem' }, children: _jsx("i", { className: `fi ${modal.icon} fs-2` }) }), _jsx("h3", { className: `mb-3 text-${modal.variant}`, children: modal.title }), modal.body, _jsx("div", { className: "mt-4 mb-6", children: _jsx(Link, { to: "#!", className: `btn btn-${modal.variant}`, style: { width: '200px' }, onClick: modal.onClick, children: modal.buttonText }) }), _jsxs("p", { className: "fs-13 pt-4", children: ["Earn up to $5 USD for each friend you refer!", _jsx(Link, { to: "#", children: " Invite friends" })] }), _jsxs("div", { className: "btn-group gap-2", children: [_jsx(Link, { to: "#!", className: "btn rounded-circle btn-icon btn-md text-facebook", children: _jsx("i", { className: "fi fi-brands-facebook" }) }), _jsx(Link, { to: "#!", className: "btn rounded-circle btn-icon btn-md text-twitter", children: _jsx("i", { className: "fi fi-brands-twitter" }) }), _jsx(Link, { to: "#!", className: "btn rounded-circle btn-icon btn-md text-instagram", children: _jsx("i", { className: "fi fi-brands-instagram" }) })] })] }) })] }, index))) }) }));
};
export default ModalUsecase;
