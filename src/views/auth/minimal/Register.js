import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button, Form, Stack } from 'react-bootstrap';
import TitleHelmet from '@/components/Common/TitleHelmet';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthMinmal from './AuthMinmal';
const generatePassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~@#$%^&*(){}[]';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
    return password;
};
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(generatePassword(0));
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [communityEmail, setCommunityEmail] = useState(false);
    const [termsConditions, setTermsConditions] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleGeneratePassword = () => {
        setPassword(generatePassword(16));
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Register successful!');
            setTimeout(() => {
                navigate('/auth/minimal/register-success', {
                    state: { username, email, password },
                });
            }, 1500);
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Register" }), _jsx(AuthLayout, { children: _jsxs(AuthMinmal, { children: [_jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Create an Account" }), _jsx("p", { className: "fs-16 lead", children: "Let's get you all set up, so you can verify your personal account and begin setting up your profile." })] }), _jsxs(Form, { onSubmit: handleRegister, children: [_jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: "text", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value), required: true }) }), _jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: "email", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }) }), _jsxs(Form.Group, { className: "mb-3 position-relative", children: [_jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value), required: true }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '1rem' }, onClick: handleTogglePasswordVisibility, children: _jsx("i", { className: `fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}` }) }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '-1rem' }, onClick: handleGeneratePassword, children: _jsx("i", { className: "fi fi-rr-magic-wand" }) })] }), _jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Confirm password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true }) }), _jsxs(Stack, { gap: 2, className: "text-start mt-4", children: [_jsxs(Form.Check, { type: "checkbox", id: "check-api-community-email", children: [_jsx(Form.Check.Input, { type: "checkbox", checked: communityEmail, onChange: () => setCommunityEmail(!communityEmail) }), _jsx(Form.Check.Label, { children: "Yes, I wnat to receive window community emails" })] }), _jsxs(Form.Check, { type: "checkbox", id: "check-api-terms-conditions", children: [_jsx(Form.Check.Input, { type: "checkbox", checked: termsConditions, onChange: () => setTermsConditions(!termsConditions), required: true }), _jsxs(Form.Check.Label, { children: ["I agree to all the", ' ', _jsx(Link, { to: "/other-pages/terms-services", children: "Terms & Conditions" }), " and Fees."] })] })] }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Loading..."] })) : ('Register') }) }), _jsxs("div", { children: ["Already have an account? ", _jsx(Link, { to: "/auth/minimal/login", children: "Login" })] })] })] }) })] }));
};
export default Register;
