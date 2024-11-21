import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '@/common';
import { changeHTMLAttribute } from '@/utils';
import { Button, Card, Stack } from 'react-bootstrap';
import Logo from '@/components/Common/Logo';
const EmailTemplatesLayout = ({ children }) => {
    const { settings } = useThemeContext();
    useEffect(() => {
        changeHTMLAttribute('data-color-scheme', settings.color);
        changeHTMLAttribute('data-bs-theme', settings.theme);
        changeHTMLAttribute('data-theme-font', settings.font);
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
    }, [settings]);
    return (_jsx(_Fragment, { children: _jsxs(Stack, { className: "email-layout align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: [_jsxs(Card, { className: "w-100 mx-auto my-6 my-sm-8 rounded-5", style: { maxWidth: '600px' }, children: [_jsxs(Card.Header, { className: "d-flex align-items-center justify-content-between", children: [_jsx(Link, { to: "/", children: _jsx(Logo, {}) }), _jsx(Button, { variant: "light", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical" }) })] }), _jsx(Card.Body, { className: "py-8 py-sm-8 px-sm-8", children: children })] }), _jsxs(Link, { to: "/", className: "icon-link icon-link-hover link-primary py-2 px-4 mb-6", children: [_jsx("i", { className: "fi fi-rr-arrow-left bi" }), _jsx("span", { className: "ms-2", children: "Back to Home" })] })] }) }));
};
export default EmailTemplatesLayout;
