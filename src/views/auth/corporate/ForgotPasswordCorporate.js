import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import TitleHelmet from '@/components/Common/TitleHelmet';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthCorporate from './AuthCorporate';
const ForgotPasswordCorporate = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast(() => (_jsxs("span", { children: ["\uD83E\uDD16 Reset link sent to: ", _jsx("span", { className: "fw-semibold text-black", children: email })] })));
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Forgot Password" }), _jsx(AuthLayout, { children: _jsxs(AuthCorporate, { children: [_jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Forgot Password" }), _jsx("p", { className: "fs-16 lead", children: "If you forgot your password, well, then we'll email you instructions to reset your password." })] }), _jsxs(Form, { onSubmit: handleLogin, children: [_jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }) }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Loading..."] })) : ('Reset Password') }) }), _jsx("div", { children: _jsx(Link, { to: "/auth/corporate/login", className: "link-primary", children: "Return to login" }) })] })] }) })] }));
};
export default ForgotPasswordCorporate;
