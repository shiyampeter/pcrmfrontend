import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import undefinedImage from '@/assets/images/general/undefined.png';
const cardsData = [
    {
        title: 'Special title treatment',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        listItems: [
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
        ],
        buttonLinks: [
            { href: '#!', text: 'Card Link', variant: 'btn-softtext-primary' },
            { href: '#!', text: 'Another Link', variant: 'btn-softtext-danger' },
        ],
    },
    {
        title: 'Special title treatment',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        listItems: [
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
        ],
        buttonLinks: [
            { href: '#!', text: 'Card Link', variant: 'btn-softtext-primary' },
            { href: '#!', text: 'Another Link', variant: 'btn-softtext-danger' },
        ],
    },
    {
        title: 'Special title treatment',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        listItems: [
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
            'Some quick example text to build on the card title',
        ],
        buttonLinks: [
            { href: '#!', text: 'Card Link', variant: 'btn-softtext-primary' },
            { href: '#!', text: 'Another Link', variant: 'btn-softtext-danger' },
        ],
    },
];
const CardSink = () => {
    return (_jsx(Row, { className: "g-3 g-md-4", children: cardsData.map(({ title, text, listItems, buttonLinks }, idx) => (_jsx(Col, { lg: 4, children: _jsxs(Card, { children: [_jsx(Card.Img, { variant: "top", src: undefinedImage }), _jsxs(Card.Body, { children: [_jsx(Card.Title, { className: "mb-2", children: title }), _jsx(Card.Text, { children: text })] }), _jsx(ListGroup, { className: "list-group-flush", children: listItems.map((item, idx) => (_jsx(ListGroup.Item, { children: item }, idx))) }), _jsx(Card.Body, { children: buttonLinks.map(({ href, text, variant }, idx) => (_jsx(Card.Link, { href: href, className: `btn rounded-pill ${variant}`, children: text }, idx))) })] }) }, idx))) }));
};
export default CardSink;
