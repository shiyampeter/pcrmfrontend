import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Image, Toast } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
const ToastBasic = () => {
    return (_jsx(_Fragment, { children: _jsxs(Toast, { children: [_jsxs(Toast.Header, { children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-dark mb-0 me-auto", children: "Toast Notification" }), _jsx("small", { children: "11 mins ago" })] }), _jsx(Toast.Body, { children: "Hello, world! This is a toast message." })] }) }));
};
export default ToastBasic;
