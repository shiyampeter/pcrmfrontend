import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Row, Col, Form } from 'react-bootstrap';
import Saving from '@/components/Misc/Saving';
import { AcDelete, AcPassword, AcQuestions, AcSecurity } from './Components';
const SecurityComponent = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsxs(Form, { children: [_jsx(AcPassword, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsx(AcQuestions, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsx(AcSecurity, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsxs(Row, { className: "g-md-4 mb-md-4", children: [_jsx(Col, { md: 3 }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Saving, { message: "Updated successfully" }) })] })] }) }) }), _jsx(Card, { children: _jsx(Card.Body, { children: _jsx(AcDelete, {}) }) })] }));
};
export default SecurityComponent;
