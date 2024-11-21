import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useThemeContext } from '@/common';
import { changeHTMLAttribute } from '@/utils';
import { Card, Stack } from 'react-bootstrap';
const ErrorLayout = ({ children }) => {
    const { settings } = useThemeContext();
    useEffect(() => {
        changeHTMLAttribute('data-color-scheme', settings.color);
        changeHTMLAttribute('data-bs-theme', settings.theme);
        changeHTMLAttribute('data-theme-font', settings.font);
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
    }, [settings]);
    return (_jsx(_Fragment, { children: _jsx(Stack, { className: "error-layout align-items-center justify-content-center mx-4 mx-sm-6", style: { minHeight: '100vh' }, children: _jsx(Card, { className: "w-100 mx-auto my-6 my-sm-8", style: { maxWidth: '576px' }, children: _jsx(Card.Body, { className: "px-6 py-16 px-sm-16 py-md-24 px-md-24  text-center", children: children }) }) }) }));
};
export default ErrorLayout;
