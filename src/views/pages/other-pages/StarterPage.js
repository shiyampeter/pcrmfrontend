import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { Card } from 'react-bootstrap';
const StarterPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Starter Page" }), _jsx(Card, { className: "flex-grow-1", children: _jsx(Card.Body, { className: "d-flex align-items-center justify-content-center", children: _jsx("div", { className: "display-4 opacity-25", children: "Starter Page" }) }) })] }));
};
export default StarterPage;
