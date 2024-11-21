import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthContext } from '@/common';
import { Button, Form, Stack } from 'react-bootstrap';
import TitleHelmet from '@/components/Common/TitleHelmet';
import useLogin from '../useAuth/useLogin';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthModern from './AuthModern';
const LoginModern = () => {
    const { removeSession } = useAuthContext();
    const { loading, login, redirectUrl, isAuthenticated } = useLogin();
    const [email, setEmail] = useState('admin@email.com');
    const [password, setPassword] = useState('12345678');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    useEffect(() => {
        removeSession();
    }, [removeSession]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const validateEmail = (input) => {
        if (!input) {
            setEmailError('Email is required');
            return false;
        }
        else {
            setEmailError(null);
            return true;
        }
    };
    const validatePassword = (input) => {
        if (!input) {
            setPasswordError('Password is required');
            return false;
        }
        else {
            setPasswordError(null);
            return true;
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        if (isEmailValid && isPasswordValid) {
            login(e, { email, password });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Login Modern" }), _jsx(AuthLayout, { children: _jsxs(AuthModern, { children: [isAuthenticated && _jsx(Navigate, { to: redirectUrl, replace: true }), _jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Login to your account" }), _jsx("p", { className: "fs-16 lead", children: "Hey, Enter your details to get login to your account." })] }), _jsxs(Form, { onSubmit: handleSubmit, children: [_jsxs(Form.Group, { className: "mb-3", children: [_jsx(Form.Control, { type: "email", placeholder: "Email", value: email, onChange: (e) => {
                                                setEmail(e.target.value);
                                                validateEmail(e.target.value);
                                            }, isInvalid: !!emailError, required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: emailError })] }), _jsxs(Form.Group, { className: "mb-3 position-relative", children: [_jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Password", value: password, onChange: (e) => {
                                                setPassword(e.target.value);
                                                validatePassword(e.target.value);
                                            }, isInvalid: !!passwordError, required: true }), _jsx(Form.Control.Feedback, { type: "invalid", children: passwordError }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '-1rem' }, onClick: togglePasswordVisibility, children: _jsx("i", { className: `fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}` }) })] }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs(Form.Check, { type: "checkbox", id: "check-api-checkbox", children: [_jsx(Form.Check.Input, { type: "checkbox", checked: rememberMe, onChange: () => setRememberMe(!rememberMe) }), _jsx(Form.Check.Label, { children: "Remember me" })] }), _jsx(Link, { to: "/auth/modern/forgot-password", className: "link-primary ms-auto", children: "Forgot password?" })] }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Loading..."] })) : ('Login') }) }), _jsxs("div", { children: ["Don't have an account? ", _jsx(Link, { to: "/auth/modern/register", children: "Create an Account" })] }), _jsx("div", { className: "mt-12 mb-6 border-bottom position-relative", children: _jsx("span", { className: "small py-1 px-3 text-uppercase text-muted bg-body-tertiary rounded position-absolute translate-middle start-50", children: "or" }) }), _jsxs("div", { className: "d-grid flex-wrap d-sm-flex gap-2", children: [_jsxs(Button, { variant: "neutral", className: "px-3 flex-fill", children: [_jsx("i", { className: "fi fi-brands-google" }), _jsx("span", { className: "ms-2", children: "Login with Google" })] }), _jsxs(Button, { variant: "neutral", className: "px-3 flex-fill", children: [_jsx("i", { className: "fi fi-brands-facebook" }), _jsx("span", { className: "ms-2", children: "Login with Facebook" })] })] })] })] }) })] }));
};
export default LoginModern;
