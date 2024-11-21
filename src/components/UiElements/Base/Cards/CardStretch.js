import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Col, Row } from 'react-bootstrap';
const CardStretch = () => {
    const columnData = [
        {
            cards: [
                { header: 'Height 100%', bodyTitle: 'Height 100%', stretchClass: 'card-stretch-100' },
            ],
        },
        {
            cards: [
                { header: 'Height 50%', bodyTitle: 'Height 50%', stretchClass: 'card-stretch-50 mb-4' },
                { header: 'Height 50%', bodyTitle: 'Height 50%', stretchClass: 'card-stretch-50' },
            ],
        },
        {
            cards: [
                {
                    header: 'Height 33.333%',
                    bodyTitle: 'Height 33.333%',
                    stretchClass: 'card-stretch-33 mb-4',
                },
                {
                    header: 'Height 33.333%',
                    bodyTitle: 'Height 33.333%',
                    stretchClass: 'card-stretch-33 mb-4',
                },
                { header: 'Height 33.333%', bodyTitle: 'Height 33.333%', stretchClass: 'card-stretch-33' },
            ],
        },
    ];
    return (_jsx(Row, { className: "g-3 g-md-4", children: columnData.map((column, columnIndex) => (_jsx(Col, { lg: 4, children: column.cards.map(({ header, bodyTitle, stretchClass }, cardIndex) => (_jsxs(Card, { className: stretchClass, children: [_jsx(Card.Header, { children: header }), _jsxs(Card.Body, { children: [_jsx(Card.Title, { className: "mb-2", children: bodyTitle }), _jsx(Card.Text, { children: "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action." })] }), _jsx(Card.Footer, { children: "Footer" })] }, cardIndex))) }, columnIndex))) }));
};
export default CardStretch;
