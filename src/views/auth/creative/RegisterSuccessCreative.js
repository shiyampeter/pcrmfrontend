import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import TitleHelmet from '@/components/Common/TitleHelmet';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthCreative from './AuthCreative';
const RegisterSuccessCreative = () => {
    const location = useLocation();
    const { username, email, password } = location.state || {};
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Register Success Creative" }), _jsx(AuthLayout, { children: _jsxs(AuthCreative, { children: [_jsxs("div", { className: "mb-6", children: [_jsxs("h4", { className: "fw-bold mb-3 text-success d-flex align-items-center gap-2", children: [_jsx("i", { className: "fi fi-br-shield-check fs-24" }), " Register Success"] }), _jsx("p", { className: "fs-16 lead mb-4", children: "Thank you for submitting the form. You can now sign in with your username or email and password." }), _jsxs("div", { children: [_jsxs("p", { children: ["Username: ", _jsx("span", { className: "fw-semibold text-dark", children: username })] }), _jsxs("p", { children: ["Email: ", _jsx("span", { className: "fw-semibold text-dark", children: email })] }), _jsxs("p", { children: ["Password: ", _jsx("span", { className: "fw-semibold text-dark", children: password })] })] })] }), _jsx(Link, { to: "/auth/creative/login", className: "btn btn-primary", children: "Return to login" })] }) })] }));
};
export default RegisterSuccessCreative;
