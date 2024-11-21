import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Button, Form } from 'react-bootstrap';
import TitleHelmet from '@/components/Common/TitleHelmet';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthCorporate from './AuthCorporate';
const generatePassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~@#$%^&*(){}[]';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        newPassword += charset.charAt(randomIndex);
    }
    return newPassword;
};
const ResetPasswordCorporate = () => {
    const [newPassword, setNewPassword] = useState(generatePassword(0));
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleGeneratePassword = () => {
        setNewPassword(generatePassword(16));
    };
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('Password reset successful!');
            setTimeout(() => {
                navigate('/auth/corporate/login');
            }, 2000);
        }, 1000);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Reset Password" }), _jsx(AuthLayout, { children: _jsxs(AuthCorporate, { children: [_jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Reset Password" }), _jsx("p", { className: "fs-16 lead", children: "Enter your email and a reset link will sent to you, let's access our the best recommendation for you." })] }), _jsxs(Form, { onSubmit: handleResetPassword, children: [_jsxs(Form.Group, { className: "mb-3 position-relative", children: [_jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Password", value: newPassword, onChange: (e) => setNewPassword(e.target.value), required: true }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '1rem' }, onClick: handleTogglePasswordVisibility, children: _jsx("i", { className: `fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}` }) }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '-1rem' }, onClick: handleGeneratePassword, children: _jsx("i", { className: "fi fi-rr-magic-wand" }) })] }), _jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Confirm password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true }) }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Loading..."] })) : ('Reset Password') }) })] }), _jsxs("div", { children: ["Don't have an account? ", _jsx(Link, { to: "/auth/corporate/register", children: "Create an Account" })] })] }) })] }));
};
export default ResetPasswordCorporate;
