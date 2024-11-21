import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Row, Col, Card } from 'react-bootstrap';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { IconsBootstrap } from '@/components/UiElements/Icons';
const Bootstrap = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Bootstrap", subName: "Icons", url: 'https://react-icons.github.io/react-icons/icons/bs/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { sm: 12, children: _jsx(IconsBootstrap, {}) }), _jsx(Col, { sm: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Installation" }) }), _jsx(Card.Body, { children: _jsx("code", { children: "npm install react-icons --save" }) })] }) })] })] }));
};
export default Bootstrap;
