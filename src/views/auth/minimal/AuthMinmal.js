import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense } from 'react';
import Logo from '@/components/Common/Logo';
import Copyright from '@/components/Misc/Copyright';
import { Card, Stack } from 'react-bootstrap';
const AuthMinmal = ({ children }) => {
    return (_jsx(Suspense, { fallback: _jsx("div", {}), children: _jsxs(Stack, { className: "auth-layout align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: [_jsx("div", { className: "mt-6 mt-sm-8", children: _jsx(Logo, {}) }), _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '480px' }, children: _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children }) }), _jsx("div", { className: "mb-6 mb-sm-8", children: _jsx(Copyright, {}) })] }) }));
};
export default AuthMinmal;
