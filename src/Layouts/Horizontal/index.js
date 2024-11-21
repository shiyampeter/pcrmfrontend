import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ThemeSettings, useThemeContext } from '@/common/context';
import { Preloader, PreloaderFull } from '@/components/Misc/Preloader';
import { useToggle } from '@/hooks';
import { changeHTMLAttribute } from '@/utils';
import { Suspense, useEffect, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import Customizer from '../Customizer/Customizer';
import Footer from '../Footer';
import Header from '../Header';
import SupportLiveChat from '../LiveChat/SupportLiveChat';
import Navigation from './Navigation';
const HorizontalLayout = ({ children }) => {
    const [horizontalDropdownOpen, toggleMenu] = useToggle();
    const { settings, updateSettings } = useThemeContext();
    const [showLiveChat, setShowLiveChat] = useState(false);
    const handleSupportLiveChat = () => {
        setShowLiveChat(!showLiveChat);
    };
    const handleCustomizer = () => {
        updateSettings({ customizer: ThemeSettings.customizer.show });
    };
    useEffect(() => {
        changeHTMLAttribute('data-color-scheme', settings.color);
        changeHTMLAttribute('data-navigation-type', 'horizontal');
        changeHTMLAttribute('data-bs-theme', settings.theme);
        changeHTMLAttribute('data-theme-font', settings.font);
        changeHTMLAttribute('data-content-layout', settings.layout.mode);
        changeHTMLAttribute('data-header-skin', settings.header.theme);
        changeHTMLAttribute('data-navigation-skin', settings.sidebar.theme);
        changeHTMLAttribute('data-navigation-menu', settings.sidebar.menu);
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
        return () => {
            document.getElementsByTagName('html')[0].removeAttribute('data-navigation-type');
        };
    }, [settings]);
    return (_jsxs(Suspense, { fallback: _jsx("div", {}), children: [_jsxs("div", { className: "wrapper", children: [_jsx(Suspense, { fallback: _jsx(PreloaderFull, {}), children: _jsx(Header, { toggleMenu: toggleMenu, navOpen: horizontalDropdownOpen }) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Navigation, { isMenuOpened: horizontalDropdownOpen }) }), _jsx("main", { className: "main-content", children: _jsx("div", { className: `inner-content ${location.pathname.startsWith('/apps/') ? 'apps-content' : ''}`, children: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: children }) }) }), !['/apps/'].some((path) => location.pathname.startsWith(path)) && (_jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Footer, {}) }))] }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(Customizer, {}) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(SupportLiveChat, { show: showLiveChat }) }), _jsx(Stack, { className: "position-fixed z-1", style: { right: '0', bottom: '50%' }, children: _jsx(Button, { onClick: handleCustomizer, variant: "primary", className: "btn-lg btn-icon rounded-0 rounded-start-3", children: _jsx("i", { className: "fi fi-rr-settings fs-18" }) }) })] }));
};
export default HorizontalLayout;
