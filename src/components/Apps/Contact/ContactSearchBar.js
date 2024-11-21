import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Stack, Form } from 'react-bootstrap';
const ContactSearchBar = ({ searchTerm, handleSearch }) => {
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: _jsx(Form, { className: "w-100", children: _jsx(Form.Control, { type: "text", className: "rounded-pill", placeholder: "Search....", value: searchTerm, onChange: (e) => {
                        handleSearch(e.target.value);
                    } }) }) }) }));
};
export default ContactSearchBar;
