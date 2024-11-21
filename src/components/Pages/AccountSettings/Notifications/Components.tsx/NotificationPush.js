import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Row, Form } from 'react-bootstrap';
const NotificationPush = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "g-4", children: [_jsxs(Col, { md: 3, children: [_jsx("h5", { className: "fw-semibold", children: "Push Notify" }), _jsx("p", { children: "You will get only notification what have enabled." })] }), _jsxs(Col, { md: 9, xl: 8, xxl: 6, children: [_jsx(Form.Check, { type: "radio", name: "PushNotify", className: "mb-4", id: "radio-push-notify-everything", defaultChecked: true, label: _jsxs("div", { className: "ms-2", children: [_jsx("span", { className: "h6 fw-semibold text-dark mb-1 d-block", children: "Everything" }), _jsx("span", { className: "fw-normal d-block", children: "Notify or receiving post or story." })] }) }), _jsx(Form.Check, { type: "radio", name: "PushNotify", className: "mb-4", id: "radio-push-notify-important", label: _jsxs("div", { className: "ms-2", children: [_jsx("span", { className: "h6 fw-semibold text-dark mb-1 d-block", children: "Only what's important" }), _jsx("span", { className: "fw-normal d-block", children: "These are notification to remaind you." })] }) }), _jsx(Form.Check, { type: "radio", name: "PushNotify", className: "mb-0", id: "radio-push-notify-no-push", label: _jsxs("div", { className: "ms-2", children: [_jsx("span", { className: "h6 fw-semibold text-dark mb-1 d-block", children: "No push notifications" }), _jsx("span", { className: "fw-normal d-block", children: "Send me an email when my items are approved or rejected." })] }) })] })] }) }));
};
export default NotificationPush;