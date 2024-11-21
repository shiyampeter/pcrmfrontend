import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
const ModalLive = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "primary", onClick: handleShow, children: "Launch Live Modal" }), _jsxs(Modal, { show: show, onHide: handleClose, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Modal heading" }) }), _jsx(Modal.Body, { children: "Woohoo, you are reading this text in a modal!" }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "soft-danger", onClick: handleClose, children: "Close" }), _jsx(Button, { variant: "primary", onClick: handleClose, children: "Save Changes" })] })] })] }));
};
export default ModalLive;
