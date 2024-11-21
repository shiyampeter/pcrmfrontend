import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Stack } from 'react-bootstrap';
import Loading from '@/components/Misc/Loading';
import { Toaster, toast } from 'react-hot-toast';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
import Contacts from './data/contactData';
const ContactsComponent = () => {
    const [contactsData, setContactsData] = useState(Contacts);
    const toggleIsFollow = (idx) => {
        setContactsData((prevData) => {
            const newData = [...prevData];
            newData[idx].isFavorite = !newData[idx].isFavorite;
            return newData;
        });
        if (contactsData[idx].isFavorite) {
            toast.success(`Starred ${contactsData[idx].name}!`);
        }
        else {
            toast.error(`Unstarred ${contactsData[idx].name}!`);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Row, { className: "g-3 g-md-4", children: [contactsData.map(({ image, name, email, phone, isFavorite }, idx) => (_jsx(Col, { sm: 6, lg: 4, xxl: 3, children: _jsx(Card, { children: _jsx(Card.Body, { children: _jsxs(Stack, { gap: 3, direction: "horizontal", className: "justify-content-between", children: [_jsxs(Stack, { gap: 3, direction: "horizontal", children: [_jsx(Avatar, { type: "image", src: image, alt: "User Avatar", className: "avatar avatar-xl" }), _jsxs("div", { children: [_jsx("h6", { className: "fw-semibold mb-1", children: name }), _jsx("p", { className: "text-muted mb-1", children: email }), _jsx("p", { className: "fs-13 text-muted mb-0", children: phone })] })] }), _jsx(Link, { to: "#!", className: `${isFavorite ? 'text-warning' : ''}`, onClick: () => toggleIsFollow(idx), children: isFavorite ? (_jsx("i", { className: "fi fi-rr-star text-warning" })) : (_jsx("i", { className: "fi fi-rr-star" })) })] }) }) }) }, idx))), _jsx(Col, { sm: 12, className: "text-center", children: _jsx(Loading, {}) })] }), _jsx(Toaster, { position: "top-center" })] }));
};
export default ContactsComponent;
