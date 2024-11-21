import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuthContext } from '@/common';
import AuthLayout from '@/Layouts/AuthLayout';
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Button, Form, Stack } from 'react-bootstrap';
import AuthMinmal from './AuthMinmal';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/redux/api/public/authService';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { removeSession } = useAuthContext();
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('123456');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated, saveSession } = useAuthContext();
    const redirectUrl = useMemo(() => location.state && location.state.from ? location.state.from.pathname : '/dashboards/default', [location.state]);
    console.log(redirectUrl);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const response = await dispatch(userLogin({ user_username: username, password })).unwrap();
            toast.success(response?.message);
            setTimeout(() => {
                if (response?.data?.token) {
                    localStorage.setItem('token', response?.data?.token);
                    saveSession({ ...(response.user ?? {}), token: response?.data?.token });
                    navigate(redirectUrl);
                }
            }, 1500);
            navigate(redirectUrl);
        }
        catch (error) {
            toast.error(error.message);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Login" }), _jsx(AuthLayout, { children: _jsxs(AuthMinmal, { children: [isAuthenticated && _jsx(Navigate, { to: redirectUrl, replace: true }), _jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Login to your account" }), _jsx("p", { className: "fs-16 lead", children: "Hey, Enter your details to get login to your account." })] }), _jsxs(Form, { onSubmit: handleSubmit, children: [_jsx(Form.Group, { className: "mb-3", children: _jsx(Form.Control, { type: "text", placeholder: "UserName", value: username, onChange: (e) => {
                                            setUsername(e.target.value);
                                        }, 
                                        // isInvalid={!!emailError}
                                        required: true }) }), _jsxs(Form.Group, { className: "mb-3 position-relative", children: [_jsx(Form.Control, { type: showPassword ? 'text' : 'password', placeholder: "Password", value: password, onChange: (e) => {
                                                setPassword(e.target.value);
                                            }, 
                                            // isInvalid={!!passwordError}
                                            required: true }), _jsx("span", { className: "btn btn-icon position-absolute translate-middle top-50", style: { right: '-1rem' }, onClick: togglePasswordVisibility, children: _jsx("i", { className: `fi ${showPassword ? 'fi-rr-eye-crossed' : 'fi-rr-eye'}` }) })] }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs(Form.Check, { type: "checkbox", id: "check-api-checkbox", children: [_jsx(Form.Check.Input, { type: "checkbox", checked: rememberMe, onChange: () => setRememberMe(!rememberMe) }), _jsx(Form.Check.Label, { children: "Remember me" })] }), _jsx(Link, { to: "/auth/minimal/forgot-password", className: "link-primary ms-auto", children: "Forgot password?" })] }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", 
                                        // disabled={loading}
                                        className: "text-white", children: "Login" }) }), _jsxs("div", { children: ["Don't have an account? ", _jsx(Link, { to: "/auth/minimal/register", children: "Create an Account" })] }), _jsx("div", { className: "mt-12 mb-6 border-bottom position-relative", children: _jsx("span", { className: "small py-1 px-3 text-uppercase text-muted bg-body-tertiary rounded position-absolute translate-middle start-50", children: "or" }) }), _jsxs("div", { className: "d-grid flex-wrap d-sm-flex gap-2", children: [_jsxs(Button, { variant: "neutral", className: "px-3 flex-fill", children: [_jsx("i", { className: "fi fi-brands-google" }), _jsx("span", { className: "ms-2", children: "Login with Google" })] }), _jsxs(Button, { variant: "neutral", className: "px-3 flex-fill", children: [_jsx("i", { className: "fi fi-brands-facebook" }), _jsx("span", { className: "ms-2", children: "Login with Facebook" })] })] })] })] }) })] }));
};
export default Login;
