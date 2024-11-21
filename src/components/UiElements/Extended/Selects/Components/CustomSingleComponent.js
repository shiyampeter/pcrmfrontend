import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { components } from 'react-select';
export const CustomSelectOption = ({ innerProps, label, data }) => (_jsxs("div", { className: "select__option p-2", ...innerProps, children: [_jsx("img", { src: data.image, className: "img-fluid rounded-circle me-2", style: { width: '20px', height: '20px' }, alt: label }), _jsx("span", { className: "ml-2", children: label })] }));
export const CustomControl = ({ children, ...props }) => {
    const selected = props.getValue()[0];
    return (_jsxs(components.Control, { ...props, children: [selected && (_jsx("img", { src: selected.image, className: "img-fluid rounded-circle ms-2", style: { width: '20px', height: '20px' }, alt: selected.label })), children] }));
};
