import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const MiscPopover = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: colors.map((variant) => (_jsx(OverlayTrigger, { overlay: _jsxs(Popover, { id: `popover-${variant}`, className: `popover-${variant.toLowerCase()}`, children: [_jsx(Popover.Header, { as: "h3", children: `Popover ${variant}` }), _jsxs(Popover.Body, { children: ["And here's some amazing content. It's very engaging. Right?", ' '] })] }), children: _jsxs(Button, { variant: "", className: `btn-${variant.toLowerCase()}`, children: ["Popover ", variant] }) }, variant))) }) }));
};
export default MiscPopover;
