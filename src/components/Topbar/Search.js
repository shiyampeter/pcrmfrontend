import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Form, InputGroup, CloseButton, Stack } from 'react-bootstrap';
import { MENU_ITEMS } from '@/constants/menu';
const SearchLink = ({ to, label }) => (_jsxs(Link, { to: to, className: "fw-medium px-2 border rounded hstack gap-4 mb-2", style: { paddingTop: '0.45rem', paddingBottom: '0.45rem' }, children: [_jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx("i", { className: "fi fi-br-hastag fs-12 p-2 text-muted border rounded-2" }), _jsx("span", { children: label }), _jsx("span", { className: "fs-13 fw-light text-muted d-none d-md-block", children: to })] }), _jsx("div", { className: "ms-auto hstack", children: _jsx("i", { className: "fi fi-rr-angle-small-right" }) })] }));
const Search = () => {
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
        setSearchTerm('');
    };
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
        const results = [];
        const searchInMenu = (item) => {
            if (item.label.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (item.isTitle || item.isTitle === undefined)) {
                results.push(item);
            }
            if (item.children) {
                item.children.forEach((childItem) => searchInMenu(childItem));
            }
        };
        MENU_ITEMS.forEach((item) => searchInMenu(item));
        setSearchResults(results);
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "header-btn", onClick: toggleSearch, children: _jsx("i", { className: "fi fi-rr-search" }) }), _jsxs(Modal, { show: searchOpen, onHide: toggleSearch, className: "search-modal", children: [_jsx(Modal.Header, { children: _jsx(Form, { className: "w-100", children: _jsxs(InputGroup, { children: [_jsx(InputGroup.Text, { className: "border-0 ps-0", children: _jsx("i", { className: "fi fi-rr-search fs-18" }) }), _jsx(Form.Control, { className: "border-0 fw-medium shadow-none", placeholder: "Search....", value: searchTerm, onChange: (e) => handleSearch(e.target.value) }), _jsx(InputGroup.Text, { className: "border-0 pe-0", children: _jsx(CloseButton, { onClick: toggleSearch }) })] }) }) }), _jsx("div", { className: "p-4 overflow-x-hidden", style: { maxHeight: '400px' }, children: searchResults.length === 0 ? (_jsx(_Fragment, { children: searchTerm ? (_jsxs("h5", { className: "text-muted my-4", children: ["No results found for ", _jsxs("span", { className: "text-dark", children: ["\"", searchTerm, "\""] })] })) : (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-6", children: [_jsx("p", { className: "fs-11 text-uppercase text-muted", children: "Popular Search" }), _jsx(SearchLink, { to: "/apps/chat", label: "Chats" }), _jsx(SearchLink, { to: "/apps/email", label: "Emails" }), _jsx(SearchLink, { to: "/apps/calendar", label: "Calendar" }), _jsx(SearchLink, { to: "/user-profile/overview", label: "User Profile" }), _jsx(SearchLink, { to: "/account-settings/account", label: "Account Settings" })] }), _jsxs("div", { children: [_jsx("p", { className: "fs-11 text-uppercase text-muted", children: "Recommended Search" }), _jsx(SearchLink, { to: "/docs/support", label: "Support" }), _jsx(SearchLink, { to: "/docs/changelog", label: "Changelog" }), _jsx(SearchLink, { to: "/docs/documentation", label: "Documentation" })] })] })) })) : (searchResults.map((parentItem) => (_jsxs(React.Fragment, { children: [parentItem.isTitle && (_jsx("h6", { className: "fs-11 text-muted text-uppercase mb-3 mt-4", children: parentItem.label })), parentItem.isTitle ? null : (_jsx(SearchLink, { to: parentItem.url || '', label: parentItem.label })), parentItem.children &&
                                    parentItem.children.map((childItem) => (_jsx(SearchLink, { to: childItem.url || '', label: childItem.label }, childItem.key)))] }, parentItem.key)))) }), _jsx(Modal.Footer, { children: _jsxs("div", { className: "fs-12 text-muted", children: ["Search by ", _jsx("span", { className: "fw-bold text-primary", children: "Window" })] }) })] })] }));
};
export default Search;
