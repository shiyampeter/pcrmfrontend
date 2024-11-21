import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Col, Nav, Row, Tab } from 'react-bootstrap';
const tabData = [
    {
        defaultActiveKey: 'home',
        navVariant: 'tabs',
        items: [
            { eventKey: 'home', label: 'Home' },
            { eventKey: 'profile', label: 'Profile' },
            { eventKey: 'contact', label: 'Contact' },
            { eventKey: 'disabled', label: 'Disabled', disabled: true },
        ],
        panes: [
            {
                eventKey: 'home',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'profile',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'contact',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'disabled',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.',
            },
        ],
    },
    {
        defaultActiveKey: 'home',
        navVariant: 'pills',
        items: [
            { eventKey: 'home', label: 'Home' },
            { eventKey: 'profile', label: 'Profile' },
            { eventKey: 'contact', label: 'Contact' },
            { eventKey: 'disabled', label: 'Disabled', disabled: true },
        ],
        panes: [
            {
                eventKey: 'home',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'profile',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'contact',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            },
            {
                eventKey: 'disabled',
                content: 'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.',
            },
        ],
    },
];
const CardNavigation = () => {
    return (_jsx(Row, { className: "g-3 g-md-4", children: tabData.map(({ defaultActiveKey, navVariant, items, panes }, index) => (_jsx(Col, { lg: 6, children: _jsx(Tab.Container, { defaultActiveKey: defaultActiveKey, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Nav, { variant: navVariant, children: items.map(({ eventKey, label, disabled }, idx) => (_jsx(Nav.Item, { children: _jsx(Nav.Link, { eventKey: eventKey, disabled: disabled, children: label }) }, idx))) }) }), _jsx(Card.Body, { children: _jsx(Tab.Content, { children: panes.map(({ eventKey, content }, idx) => (_jsx(Tab.Pane, { eventKey: eventKey, children: content }, idx))) }) })] }) }) }, index))) }));
};
export default CardNavigation;
