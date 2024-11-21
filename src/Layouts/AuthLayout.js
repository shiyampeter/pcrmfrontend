import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, Suspense, useState } from 'react';
import { ThemeSettings, useThemeContext } from '../common/context';
import { changeHTMLAttribute } from '../utils';
import { Button, Stack } from 'react-bootstrap';
import { PreloaderFull } from '@/components/Misc/Preloader';
import ThemeCustomizerPublic from './Customizer/CustomizerPublic';
import SupportLiveChat from './LiveChat/SupportLiveChat';
const AuthLayout = ({ children }) => {
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
        changeHTMLAttribute('data-bs-theme', settings.theme);
        changeHTMLAttribute('data-theme-font', settings.font);
        changeHTMLAttribute('data-content-skin', settings.layout.contentSkin);
    }, [settings]);
    return (_jsxs(Suspense, { fallback: _jsx(PreloaderFull, {}), children: [_jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx("div", { className: "wrapper", children: children }) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(ThemeCustomizerPublic, {}) }), _jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(SupportLiveChat, { show: showLiveChat }) }), _jsx(Stack, { className: "position-fixed z-1", style: { right: '0', bottom: '50%' }, children: _jsx(Button, { onClick: handleCustomizer, variant: "primary", className: "btn-lg btn-icon rounded-0 rounded-start-3", children: _jsx("i", { className: "fi fi-rr-settings fs-18" }) }) })] }));
};
export default AuthLayout;
