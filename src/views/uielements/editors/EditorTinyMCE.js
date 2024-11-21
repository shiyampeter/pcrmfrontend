import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import { EditorTyneMCE, EditorTyneMCEFull } from '@/components/UiElements/Editors/TyneMCE';
const EditorTinyMCE = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "TinyMCE", subName: "Editors", url: 'https://www.tiny.cloud/docs/integrations/react/' }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Basic" }) }), _jsx(Card.Body, { children: _jsx(EditorTyneMCE, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Full Featured" }) }), _jsx(Card.Body, { children: _jsx(EditorTyneMCEFull, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsx(Card, { className: "border-0", children: _jsxs(ListGroup, { children: [_jsx(ListGroup.Item, { children: _jsx("h5", { className: "mb-0", children: "Uses Instruction" }) }), _jsxs(ListGroup.Item, { children: ["Quill is delivered primarily via npm.", _jsx("code", { children: "npm install --save @tinymce/tinymce-react" })] }), _jsxs(ListGroup.Item, { children: ["For full documentation please visit the link:", _jsx(Link, { to: "https://www.tiny.cloud/docs/integrations/react/", target: "_blank", children: "https://www.tiny.cloud/docs/integrations/react/" })] })] }) }) })] })] }));
};
export default EditorTinyMCE;
