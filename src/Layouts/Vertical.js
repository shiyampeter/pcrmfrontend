import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Preloader, PreloaderFull } from '@/components/Misc/Preloader';
import React, { Suspense, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { ThemeSettings, useThemeContext } from '../common/context';
import { useViewport } from '../hooks';
import { changeHTMLAttribute } from '../utils';
import SupportLiveChat from './LiveChat/SupportLiveChat';
const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));
const Navigation = React.lazy(() => import('./Navigation'));
const Customizer = React.lazy(() => import('./Customizer/Customizer'));
const VerticalLayout = ({ children }) => {
    const { width } = useViewport();
    const { settings, updateSidebar, updateSettings } = useThemeContext();
    const [showLiveChat, setShowLiveChat] = useState(false);
    const handleSupportLiveChat = () => {
        setShowLiveChat(!showLiveChat);
    };
    const handleCustomizer = () => {
        updateSettings({ customizer: ThemeSettings.customizer.show });
    };
    useEffect(() => {
        changeHTMLAttribute('data-color-scheme', settings.color);
        changeHTMLAttribute('data-bs-theme', settings.theme);
        changeHTMLAttribute('data-theme-font', settings.font);
        changeHTMLAttribute('data-content-layout', settings.layout.mode);
        changeHTMLAttribute('data-header-skin', settings.header.theme);
        changeHTMLAttribute('data-navigation-skin', settings.sidebar.theme);
        changeHTMLAttribute('data-navigation-menu', settings.sidebar.menu);
        changeHTMLAttribute('data-sidenav-size', settings.sidebar.size);
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
    }, [settings]);
    useEffect(() => {
        if (width < 1200) {
            updateSidebar({ size: ThemeSettings.sidebar.size.full });
        }
        else if (width < 1400) {
            updateSidebar({ size: ThemeSettings.sidebar.size.iconbar });
        }
        else if (width > 1400) {
            updateSidebar({ size: ThemeSettings.sidebar.size.default });
        }
    }, [width]);
    return (_jsxs(Suspense, { fallback: _jsx("div", {}), children: [_jsxs("div", { className: "wrapper", children: [_jsx(Suspense, { fallback: _jsx(PreloaderFull, {}), children: _jsx(Navigation, {}) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Header, {}) }), _jsx("main", { className: "main-content", children: _jsx("div", { className: `inner-content ${location.pathname.startsWith('/apps/') ? 'apps-content' : ''}`, children: _jsxs(Suspense, { fallback: _jsx(Preloader, {}), children: [" ", children] }) }) }), !['/apps/'].some((path) => location.pathname.startsWith(path)) && (_jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Footer, {}) }))] }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Customizer, {}) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(SupportLiveChat, { show: showLiveChat }) }), _jsx(Stack, { className: "position-fixed z-1", style: {
                    right: '0',
                    bottom: '50%',
                }, children: _jsx(Button, { onClick: handleCustomizer, variant: "primary", className: "btn-lg btn-icon rounded-0 rounded-start-3", children: _jsx("i", { className: "fi fi-rr-settings fs-18" }) }) })] }));
};
export default VerticalLayout;
