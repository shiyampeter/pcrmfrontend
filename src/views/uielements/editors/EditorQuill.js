import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { EditorFull, EditorSnow } from '@/components/UiElements/Editors/Quill';
const EditorQuill = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Quill Editor", subName: "Editors", url: 'https://zenoamaro.github.io/react-quill/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Snow" }) }), _jsx(Card.Body, { children: _jsx(EditorSnow, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Full Editor" }) }), _jsx(Card.Body, { children: _jsx(EditorFull, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["Quill is delivered primarily via npm.", _jsx("code", { children: "npm install react-quill --save" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://github.com/zenoamaro/react-quill#readme", target: "_blank", children: "https://github.com/zenoamaro/react-quill#readme" })] })] }) }) })] })] }));
};
export default EditorQuill;
