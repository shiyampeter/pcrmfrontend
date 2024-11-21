import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Image, Stack } from 'react-bootstrap';
import tools from '@/assets/images/general/tools.svg';
import ErrorLayout from './ErrorLayout';
import TitleHelmet from '@/components/Common/TitleHelmet';
const UnderMaintenance = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Under Maintenance" }), _jsxs(ErrorLayout, { children: [_jsx(Image, { src: tools, alt: "Logo", fluid: true, style: { widows: '150px', height: '150px' } }), _jsxs("div", { className: "mb-8 mt-16", children: [_jsx("h3", { className: "fw-bold mb-3", children: "Under Maintenance!" }), _jsx("p", { className: "fs-16 lead", children: "Hang on! We are under maintenance! We apologize for any inconvenience caused." })] }), _jsx(Stack, { gap: 1, direction: "horizontal", className: "justify-content-center", children: _jsxs(Stack, { gap: 1, direction: "horizontal", className: "justify-content-center", children: [_jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-brands-facebook" }) }), _jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-brands-twitter" }) }), _jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-brands-instagram" }) }), _jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-brands-linkedin" }) }), _jsx(Button, { variant: "", className: "btn-icon btn-md", children: _jsx("i", { className: "fi fi-brands-twitter-alt" }) })] }) })] })] }));
};
export default UnderMaintenance;
