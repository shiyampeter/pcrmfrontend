import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Image, ToastContainer, Toast } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
const ToastAutohide = () => {
    const [show, setShow] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setShow(true), children: "Show Live Toast" }), _jsx(ToastContainer, { className: "p-3 position-fixed", position: "top-end", style: { zIndex: 9999 }, children: _jsxs(Toast, { onClose: () => setShow(false), show: show, delay: 3000, autohide: true, children: [_jsxs(Toast.Header, { children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-dark mb-0 me-auto", children: "Toast Notification" }), _jsx("small", { children: "11 mins ago" })] }), _jsx(Toast.Body, { children: "Woohoo, you're reading this text in a Toast!" })] }) })] }));
};
export default ToastAutohide;
