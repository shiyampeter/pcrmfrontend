import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Image, ToastContainer, Toast } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
const ToastStacking = () => {
    return (_jsx(_Fragment, { children: _jsxs(ToastContainer, { className: "position-static", children: [_jsxs(Toast, { children: [_jsxs(Toast.Header, { children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-dark mb-0 me-auto", children: "Toast Notification" }), _jsx("small", { className: "text-muted", children: "just now" })] }), _jsx(Toast.Body, { children: "See? Just like this." })] }), _jsxs(Toast, { children: [_jsxs(Toast.Header, { children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-dark mb-0 me-auto", children: "Toast Notification" }), _jsx("small", { className: "text-muted", children: "2 seconds ago" })] }), _jsx(Toast.Body, { children: "Heads up, toasts will stack automatically" })] })] }) }));
};
export default ToastStacking;
