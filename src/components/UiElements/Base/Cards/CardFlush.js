import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Col, Row } from 'react-bootstrap';
const CardFlush = () => {
    const cardsData = [
        {
            title: 'Special title treatment',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            links: [
                { href: '#!', className: 'btn rounded-pill btn-softtext-primary', text: 'Card Link' },
                { href: '#!', className: 'btn rounded-pill btn-softtext-danger', text: 'Another Link' },
            ],
        },
        {
            title: 'Special title treatment',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            links: [
                { href: '#!', className: 'btn rounded-pill btn-softtext-primary', text: 'Card Link' },
                { href: '#!', className: 'btn rounded-pill btn-softtext-danger', text: 'Another Link' },
            ],
        },
        {
            title: 'Special title treatment',
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            links: [
                { href: '#!', className: 'btn rounded-pill btn-softtext-primary', text: 'Card Link' },
                { href: '#!', className: 'btn rounded-pill btn-softtext-danger', text: 'Another Link' },
            ],
        },
    ];
    return (_jsx(_Fragment, { children: _jsx(Row, { className: "g-3 g-md-4", children: cardsData.map(({ title, text, links }, index) => (_jsx(Col, { lg: 4, children: _jsxs(Card, { className: "card-flush", children: [_jsx(Card.Header, { children: _jsx(Card.Title, { className: "mb-2", children: title }) }), _jsx(Card.Body, { children: _jsx(Card.Text, { children: text }) }), _jsx(Card.Body, { children: links.map(({ href, className, text }, linkIndex) => (_jsx(Card.Link, { href: href, className: className, children: text }, linkIndex))) })] }) }, index))) }) }));
};
export default CardFlush;
