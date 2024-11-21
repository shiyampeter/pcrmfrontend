import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import { Form, Row, Col } from 'react-bootstrap';
const QuestionOptions = [
    {
        value: 'What city were you born in?',
        label: '1. What city were you born in?',
    },
    {
        value: "What is your oldest sibling's middle name?",
        label: "2. What is your oldest sibling's middle name?",
    },
    {
        value: 'What was the first concert you attended?',
        label: '3. What was the first concert you attended?',
    },
    {
        value: 'What was the make and model of your first car?',
        label: '4. What was the make and model of your first car?',
    },
    {
        value: 'In what city or town did your parents meet?',
        label: '5. In what city or town did your parents meet?',
    },
];
const AcQuestions = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-6 mb-md-12", children: [_jsx("h5", { className: "fw-semibold", children: "Questions" }), _jsx("p", { children: "Change security questions for your account" })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Question #1" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Select, { options: QuestionOptions, classNamePrefix: "select" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Answer #1" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "password", placeholder: "Answer #1" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Question #2" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Select, { options: QuestionOptions, classNamePrefix: "select" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Answer #2" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Form.Control, { type: "password", placeholder: "Answer #2" }) })] })] }));
};
export default AcQuestions;
