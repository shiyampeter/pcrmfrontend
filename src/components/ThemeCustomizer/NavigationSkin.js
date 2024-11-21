import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Form, Row } from 'react-bootstrap';
const NavigationSkin = ({ handleChangeNavigationSkin, navigationSkin, navskinConstants, }) => {
    return (_jsxs(_Fragment, { children: [_jsx("h6", { className: "fs-11 fw-bold text-dark text-uppercase mb-3", style: { letterSpacing: '0.5px' }, children: "Navigation Skin" }), _jsxs(Row, { className: "g-3", children: [_jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "navigationLight", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-navigation-skin", id: "navigationLight", value: navskinConstants.light, onChange: (e) => handleChangeNavigationSkin(e.target.value), checked: navigationSkin === navskinConstants.light }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Light" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) }), _jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "navigationDark", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-navigation-skin", id: "navigationDark", value: navskinConstants.dark, onChange: (e) => handleChangeNavigationSkin(e.target.value), checked: navigationSkin === navskinConstants.dark }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Dark" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) }), _jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "navigationBrand", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-navigation-skin", id: "navigationBrand", value: navskinConstants.brand, onChange: (e) => handleChangeNavigationSkin(e.target.value), checked: navigationSkin === navskinConstants.brand }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Brand" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) }), _jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "navigationTransparent", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-navigation-skin", id: "navigationTransparent", value: navskinConstants.transparent, onChange: (e) => handleChangeNavigationSkin(e.target.value), checked: navigationSkin === navskinConstants.transparent }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Transparent" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) })] })] }));
};
export default NavigationSkin;