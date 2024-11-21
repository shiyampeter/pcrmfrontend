import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
const MiscTooltip = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: colors.map((variant) => (_jsx(OverlayTrigger, { overlay: _jsxs(Tooltip, { id: `tooltip-${variant}`, className: `tooltip-${variant.toLowerCase()}`, children: ["This top tooltip is themed via CSS variables. Tooltip on ", _jsx("strong", { children: variant }), "."] }), children: _jsxs(Button, { variant: "", className: `btn-${variant.toLowerCase()}`, children: ["Tooltip ", variant] }) }, variant))) }) }));
};
export default MiscTooltip;
