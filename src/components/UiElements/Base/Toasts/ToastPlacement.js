import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Form, Image, ToastContainer, Toast } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
const ToastPlacement = () => {
    const [position, setPosition] = useState('top-start');
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "selectToastPlacement", children: "Toast position" }), _jsx(Form.Select, { id: "selectToastPlacement", className: "mt-2", onChange: (e) => setPosition(e.currentTarget.value), children: [
                            'top-start',
                            'top-center',
                            'top-end',
                            'middle-start',
                            'middle-center',
                            'middle-end',
                            'bottom-start',
                            'bottom-center',
                            'bottom-end',
                        ].map((p) => (_jsx("option", { value: p, children: p }, p))) })] }), _jsx("div", { "aria-live": "polite", "aria-atomic": "true", className: "bg-body-secondary position-relative", style: { minHeight: '350px' }, children: _jsx(ToastContainer, { className: "p-3", position: position, style: { zIndex: 1 }, children: _jsxs(Toast, { children: [_jsxs(Toast.Header, { closeButton: false, children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-dark mb-0 me-auto", children: "Toast Notification" }), _jsx("small", { children: "11 mins ago" })] }), _jsx(Toast.Body, { children: "Hello, world! This is a toast message." })] }) }) })] }));
};
export default ToastPlacement;
