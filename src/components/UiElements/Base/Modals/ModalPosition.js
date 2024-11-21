import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, Stack } from 'react-bootstrap';
const ModalPosition = () => {
    const [modals, setModals] = useState({
        showTopStart: false,
        showTopEnd: false,
        showBottomEnd: false,
        showBottomStart: false,
    });
    const handleClose = (modal) => setModals({ ...modals, [modal]: false });
    const handleShow = (modal) => setModals({ ...modals, [modal]: true });
    const modalData = [
        {
            key: 'showTopStart',
            position: 'top-start',
            buttonText: 'Top Start',
        },
        {
            key: 'showTopEnd',
            position: 'top-end',
            buttonText: 'Top End',
        },
        {
            key: 'showBottomEnd',
            position: 'bottom-end',
            buttonText: 'Bottom End',
        },
        {
            key: 'showBottomStart',
            position: 'bottom-start',
            buttonText: 'Bottom Start',
        },
        {
            key: 'showTopCenter',
            position: 'center',
            buttonText: 'Top Center',
        },
    ];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: modalData.map((modal) => (_jsxs(React.Fragment, { children: [_jsx(Button, { variant: "primary", onClick: () => handleShow(modal.key), children: modal.buttonText }), _jsx(Modal, { show: modals[modal.key], onHide: () => handleClose(modal.key), className: `modal-dialog-${modal.position}`, children: _jsxs(Modal.Body, { className: "text-center mx-auto py-12 p-md-12", children: [_jsx("div", { className: "bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4", style: { width: '5rem', height: '5rem' }, children: _jsx("i", { className: "fi fi-rr-badge-check fs-2" }) }), _jsx("h3", { className: "mb-3 text-success", children: "Congratulations!" }), _jsxs("p", { className: "lead mx-md-5", children: ["You've successfully bought", _jsx("strong", { className: "text-dark", children: " 0.365 BTC" })] }), _jsxs("span", { className: "text-muted", children: ["Learn when you receive bitcoin in your wallet.", _jsxs(Link, { to: "#!", className: "link-button", children: [' ', "Click here"] })] })] }) })] }, modal.key))) }) }));
};
export default ModalPosition;
