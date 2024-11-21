import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Offcanvas, Row } from 'react-bootstrap';
import { ThemeSettings, useThemeContext } from './../../common/context';
import useThemeCustomizer from './../../components/ThemeCustomizer/useThemeCustomizer';
import ThemeCustomizerPublic from '@/components/ThemeCustomizer/ThemeCustomizerPublic';
import SimpleBar from 'simplebar-react';
const Customizer = () => {
    const { updateSettings, settings } = useThemeContext();
    const { reset } = useThemeCustomizer();
    const isOpenCustomizer = settings.customizer;
    const handleCustomizer = () => {
        updateSettings({ customizer: ThemeSettings.customizer.hidden });
    };
    return (_jsxs(Offcanvas, { show: isOpenCustomizer, onHide: handleCustomizer, placement: "end", id: "theme-settings-offcanvas", style: { width: '375px' }, children: [_jsx(Offcanvas.Header, { className: "d-flex align-items-center px-4 py-3 border-bottom", closeButton: true, style: { height: '4.5rem' }, children: _jsxs("div", { children: [_jsx("h5", { className: "fw-bold mb-1", children: "Preview Settings" }), _jsx("small", { className: "fs-13 fw-normal text-muted", children: "Customize and preview in real time" })] }) }), _jsx(Offcanvas.Body, { className: "p-0", children: _jsx(SimpleBar, { scrollbarMaxSize: 320, className: "h-100", children: _jsx(ThemeCustomizerPublic, {}) }) }), _jsx("div", { className: "offcanvas-footer border-top px-4 py-3 text-center", children: _jsxs(Row, { className: "g-2", children: [_jsx(Col, { xs: 6, children: _jsx(Button, { variant: "danger", type: "button", className: "w-100", id: "reset-layout", onClick: reset, children: "Reset" }) }), _jsx(Col, { xs: 6, children: _jsx(Button, { variant: "primary", role: "button", className: "w-100", children: "Buy Now" }) })] }) })] }));
};
export default Customizer;
