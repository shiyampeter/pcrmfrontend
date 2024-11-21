import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Form, Row } from 'react-bootstrap';
const HeaderSkin = ({ handleChangeHeaderSkin, headerSkin, headerConstants }) => {
    return (_jsxs(_Fragment, { children: [_jsx("h6", { className: "fs-11 fw-bold text-dark text-uppercase mb-3", style: { letterSpacing: '0.5px' }, children: "Header Skin" }), _jsxs(Row, { className: "g-3", children: [_jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "headerLight", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-header-skin", id: "headerLight", value: headerConstants.light, onChange: (e) => handleChangeHeaderSkin(e.target.value), checked: headerSkin === headerConstants.light }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Dark" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) }), _jsx(Col, { xs: 6, className: "text-center", children: _jsxs(Form.Check.Label, { htmlFor: "headerDark", className: "radio-card", children: [_jsx(Form.Check.Input, { type: "radio", name: "data-header-skin", id: "headerDark", value: headerConstants.dark, onChange: (e) => handleChangeHeaderSkin(e.target.value), checked: headerSkin === headerConstants.dark }), _jsxs("span", { className: "radio-card-wrapper d-flex p-3 position-relative", children: [_jsx("span", { className: "fs-11 fw-semibold text-muted text-uppercase d-block", style: { letterSpacing: '0.5px' }, children: "Dark" }), _jsx("span", { className: "check-icon me-2 end-0 top-50 translate-middle-y position-absolute z-1" })] })] }) })] })] }));
};
export default HeaderSkin;