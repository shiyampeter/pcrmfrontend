import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Form, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import ErrorLayout from './ErrorLayout';
import CountdownTimer from './Countdown/countdownTimer';
import TitleHelmet from '@/components/Common/TitleHelmet';
const socialMediaIcons = [
    { iconClass: 'fi fi-brands-facebook' },
    { iconClass: 'fi fi-brands-twitter' },
    { iconClass: 'fi fi-brands-instagram' },
    { iconClass: 'fi fi-brands-linkedin' },
    { iconClass: 'fi fi-brands-twitter-alt' },
];
const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState('');
    const handleSubscribe = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setEmailError('Email is required');
            return;
        }
        else if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
        setEmailError('');
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast.success('We have received your request. You will be notified once we go live.');
        }, 2000);
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Comming Soon" }), _jsxs(ErrorLayout, { children: [_jsx("div", { className: "mb-16 mb-md-24", children: _jsx(CountdownTimer, {}) }), _jsxs("div", { className: "my-8", children: [_jsx("h3", { className: "fw-bold mb-3", children: "We're launching soon" }), _jsx("p", { className: "fs-16 lead", children: "We're creating something awesome. Please subscribe to get notified when it's ready!" })] }), _jsxs("div", { className: "mb-8 text-start", children: [_jsxs(Stack, { direction: "horizontal", gap: 2, className: "justify-content-center", children: [_jsx(Form, { className: "w-100", children: _jsx(Form.Control, { placeholder: "Enter your email", value: email, onChange: (e) => {
                                                setEmail(e.target.value);
                                                setEmailError('');
                                            }, onBlur: () => {
                                                if (!email) {
                                                    setEmailError('Email is required');
                                                }
                                                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                                                    setEmailError('Please enter a valid email address');
                                                }
                                            } }) }), _jsx(Button, { onClick: handleSubscribe, disabled: loading, className: "text-white", children: loading ? (_jsx(_Fragment, { children: _jsx("span", { className: "spinner-border spinner-border-sm", role: "status", "aria-hidden": "true", style: { width: '1.25rem', height: '1.25rem' } }) })) : ('Subscribe') })] }), emailError && _jsx("div", { className: "fs-13 text-danger mt-1", children: emailError })] }), _jsx(Stack, { gap: 1, direction: "horizontal", className: "justify-content-center", children: socialMediaIcons.map((icon, index) => (_jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: icon.iconClass }) }, index))) })] })] }));
};
export default ComingSoon;
