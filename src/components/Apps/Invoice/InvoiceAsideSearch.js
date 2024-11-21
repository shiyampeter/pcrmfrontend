import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
const InvoiceAsideSearch = ({ onSearch }) => {
    const [searchQueryLocal, setSearchQueryLocal] = useState('');
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQueryLocal(query);
        onSearch(query);
    };
    return (_jsx(_Fragment, { children: _jsx(Stack, { direction: "horizontal", gap: 3, className: "px-4 border-bottom", style: { minHeight: '4.5rem' }, children: _jsx(Form, { className: "w-100", children: _jsx(Form.Control, { type: "text", className: "rounded-pill", placeholder: "Search....", value: searchQueryLocal, onChange: handleSearch }) }) }) }));
};
export default InvoiceAsideSearch;
