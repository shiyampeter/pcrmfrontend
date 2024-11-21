import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import TitleHelmet from '@/components/Common/TitleHelmet';
import AuthLayout from '@/Layouts/AuthLayout';
import AuthCreative from './AuthCreative';
const TwoFactorOTPCreative = () => {
    const [loading, setLoading] = useState(false);
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [resendCount, setResendCount] = useState(0);
    const navigate = useNavigate();
    const handleOTP = async (e) => {
        e.preventDefault();
        if (otp.every((digit) => digit !== '')) {
            const enteredOtp = otp.join('');
            if (enteredOtp === '123456') {
                setLoading(true);
                setTimeout(() => {
                    setLoading(false);
                    toast.success('Verification successful!');
                    setTimeout(() => {
                        navigate('/');
                    }, 3000);
                }, 1000);
            }
            else {
                toast.error('Incorrect OTP. Please try again.');
            }
        }
        else {
            toast.error('Please fill in all OTP digits.');
        }
    };
    const handleOtpChange = (index, value) => {
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
        }
    };
    const handleResend = () => {
        if (resendCount < 2) {
            setResendCount((prevCount) => prevCount + 1);
            toast.success('New OTP sent!');
        }
        else {
            toast.error('Resend limit reached. Please wait.');
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Verify OTP Creative" }), _jsx(AuthLayout, { children: _jsxs(AuthCreative, { children: [_jsxs("div", { className: "mb-12", children: [_jsx("h4", { className: "fw-bold mb-3", children: "Two Step Verify (OTP)" }), _jsx("p", { className: "fs-16 lead", children: "Please enter the code generated one-time password to verify your account ownership." })] }), _jsxs(Stack, { direction: "horizontal", className: "mb-12", children: [_jsxs("p", { className: "mb-0", children: [_jsx("span", { className: "fw-medium mb-1 d-block", children: "A code has been sent to: " }), _jsx("strong", { children: "+1(375)*****9897" })] }), _jsx(Link, { to: "#!", className: "ms-auto link-primary badge fs-11 bg-secondary-subtle", children: "Change Methord" })] }), _jsxs(Form, { onSubmit: handleOTP, children: [_jsx(Form.Text, { className: "text-muted", children: "Use Code: 123456" }), _jsx(Stack, { direction: "horizontal", gap: 2, className: "flex-row justify-content-center mt-2", children: otp.map((digit, index) => (_jsx("input", { className: "text-center form-control rounded", type: "text", maxLength: 1, value: digit, onChange: (e) => handleOtpChange(index, e.target.value), required: true }, index))) }), _jsx("div", { className: "d-grid gap-2 my-4", children: _jsx(Button, { variant: "primary", size: "lg", type: "submit", disabled: loading, className: "text-white", children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Validating..."] })) : ('Validate') }) }), _jsxs("div", { className: "mt-5 text-muted", children: [_jsx("span", { children: "Didn't get the code " }), resendCount < 3 && (_jsxs("a", { href: "javascript:void(0);", onClick: handleResend, children: ["Resend (", resendCount + 1, "/3)"] }))] })] })] }) })] }));
};
export default TwoFactorOTPCreative;
