import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import TitleHelmet from '@/components/Common/TitleHelmet';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import avatar from '@/assets/images/avatars/1.png';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthCorporate from './AuthCorporate';
const LockScreenCorporate = () => {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const navigate = useNavigate();
    const correctPasswordOrPin = '1234';
    const handleUnlock = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            if (password === correctPasswordOrPin) {
                toast.success('Unlock successful!');
                setTimeout(() => {
                    navigate('/user-profile/overview');
                }, 3000);
            }
            else {
                setAttempts((prevAttempts) => prevAttempts + 1);
                if (attempts >= 3) {
                    toast.error('Maximum unlock attempts reached. Please try again later.');
                }
                else {
                    toast.error('Incorrect password or pin. Please try again.');
                }
            }
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Lock Screen Corporate" }), _jsx(AuthLayout, { children: _jsxs(AuthCorporate, { children: [_jsxs(Stack, { direction: "horizontal", gap: 3, className: "mb-12", children: [_jsx(Avatar, { type: "image", src: avatar, alt: "User Avatar", className: "avatar avatar-xl border border-4" }), _jsxs("div", { children: [_jsx("h6", { className: "fw-semibold mb-1", children: "Alexndra Della" }), _jsx("p", { className: "fw-light text-muted mb-0", children: "alex.della@outlook.com" })] })] }), _jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Unlock your account" }), _jsx("p", { className: "fs-16 lead", children: "Enter your password or pin to unlock the screen! Let's access our the best recommendation for you." })] }), _jsxs(Form, { onSubmit: handleUnlock, children: [_jsx(Form.Text, { className: "text-muted", children: "Use Code: 1234" }), _jsx(Form.Group, { className: "mb-3 mt-2", children: _jsx(Form.Control, { type: "password", placeholder: "Password or PIN", value: password, onChange: (e) => setPassword(e.target.value), required: true }) }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Unlocking..."] })) : ('Unlock') }) }), _jsxs(Stack, { direction: "horizontal", children: [_jsxs("div", { children: [_jsx("span", { children: "Not you? " }), _jsx(Link, { to: "/auth/corporate/login", className: "link-primary", children: "Return to login" })] }), _jsxs(Link, { to: "/auth/corporate/forgot-password", className: "ms-auto", children: ["Forgot ", _jsx("span", { className: "text-primary", children: "PIN/Pass" }), "?"] })] })] })] }) })] }));
};
export default LockScreenCorporate;
