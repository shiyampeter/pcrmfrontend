import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Image, Row, Toast } from 'react-bootstrap';
import bell from '@/assets/images/general/bell.svg';
const ToastSolidColor = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "g-4", children: colors.map((variant) => (_jsx(Col, { lg: 4, children: _jsx(Toast, { className: "align-items-center border-0", children: _jsxs(Toast.Header, { className: `rounded-3 bg-${variant.toLowerCase()}`, closeVariant: "white", children: [_jsx(Image, { src: bell, className: "rounded me-3" }), _jsx("h6", { className: "text-white mb-0 me-auto", children: "Toast Notification" })] }) }, variant) }))) }) }));
};
export default ToastSolidColor;
