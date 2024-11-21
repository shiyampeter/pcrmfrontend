import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dropdown, DropdownButton, ButtonGroup, Stack } from 'react-bootstrap';
const DropdownBasic = () => {
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: colors.map((variant) => (_jsxs(DropdownButton, { as: ButtonGroup, id: `dropdown-variants-${variant}`, variant: variant.toLowerCase(), title: variant, children: [_jsx(Dropdown.Item, { eventKey: "1", children: "Action" }), _jsx(Dropdown.Item, { eventKey: "2", children: "Another action" }), _jsx(Dropdown.Item, { eventKey: "3", active: true, children: "Active Item" }), _jsx(Dropdown.Divider, {}), _jsx(Dropdown.Item, { eventKey: "4", children: "Separated link" })] }, variant))) }) }));
};
export default DropdownBasic;
