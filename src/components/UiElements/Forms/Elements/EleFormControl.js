import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Row, Col, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const EleFormControl = () => {
    return (_jsx(_Fragment, { children: _jsxs(Row, { className: "gy-6 gy-sm-8 gy-md-12", children: [_jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "basiInput", children: "Basic Input" }), _jsx(Form.Control, { type: "text", id: "basiInput" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "placeholderInput", children: "Input with Placeholder" }), _jsx(Form.Control, { type: "text", id: "placeholderInput", placeholder: "Placeholder" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "valueInput", children: "Input with Value" }), _jsx(Form.Control, { type: "text", id: "valueInput", defaultValue: "Input with Value" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "readonlyInput", children: "Readonly Input" }), _jsx(Form.Control, { type: "text", id: "readonlyInput", defaultValue: "Readonly input", readOnly: true })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "disabledInput", children: "Disabled Input" }), _jsx(Form.Control, { type: "text", id: "disabledInput", defaultValue: "Disabled input", disabled: true })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleInputdate", children: "Input Date" }), _jsx(Form.Control, { type: "date", id: "exampleInputdate" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleInputtime", children: "Input Time" }), _jsx(Form.Control, { type: "time", id: "exampleInputtime" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleInputpassword", children: "Input Password" }), _jsx(Form.Control, { type: "password", id: "exampleInputpassword", defaultValue: "44512465" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleFormControlTextarea5", children: "Example Textarea" }), _jsx(Form.Control, { as: "textarea", rows: 3, id: "exampleFormControlTextarea5" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "formtextInput", children: "Form Text" }), _jsx(Form.Control, { type: "password", id: "formtextInput" }), _jsx(Form.Text, { children: "Must be 8-20 characters long." })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "colorPicker", children: "Color Picker" }), _jsx(Form.Control, { type: "color", className: "form-control-color w-100", id: "colorPicker", defaultValue: "#364574" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "borderInput", children: "Input Border Style" }), _jsx(Form.Control, { type: "text", id: "borderInput", placeholder: "Enter your name", style: { borderStyle: 'dashed' } })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleDataList", children: "Datalist Example" }), _jsx(Form.Control, { list: "datalistOptions", id: "exampleDataList", placeholder: "Search your country..." }), _jsxs("datalist", { id: "datalistOptions", children: [_jsx("option", { value: "Switzerland" }), _jsx("option", { value: "New York" }), _jsx("option", { value: "France" }), _jsx("option", { value: "Spain" }), _jsx("option", { value: "Chicago" }), _jsx("option", { value: "Bulgaria" }), _jsx("option", { value: "Hong Kong" })] })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleInputrounded", children: "Rounded Input" }), _jsx(Form.Control, { type: "text", className: "rounded-pill", id: "exampleInputrounded", placeholder: "Enter your name" })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { htmlFor: "exampleInputrounded", children: "Floating Input" }), _jsx(FloatingLabel, { label: "Floating Input", children: _jsx(Form.Control, { type: "password", placeholder: "Floating Input" }) })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { children: "Sizing" }), _jsx(Form.Control, { size: "lg", type: "text", placeholder: "Large text" }), _jsx("br", {}), _jsx(Form.Control, { type: "text", placeholder: "Normal text" }), _jsx("br", {}), _jsx(Form.Control, { size: "sm", type: "text", placeholder: "Small text" })] }), _jsxs(Col, { xs: 12, children: [_jsxs(Form.Group, { controlId: "formFile", className: "mb-6 mb-md-8 mb-lg-12", children: [_jsx(Form.Label, { children: "Default file input example" }), _jsx(Form.Control, { type: "file" })] }), _jsxs(Form.Group, { controlId: "formFileMultiple", className: "mb-6 mb-md-8 mb-lg-12", children: [_jsx(Form.Label, { children: "Multiple files input example" }), _jsx(Form.Control, { type: "file", multiple: true })] }), _jsxs(Form.Group, { controlId: "formFileDisabled", className: "mb-6 mb-md-8 mb-lg-12", children: [_jsx(Form.Label, { children: "Disabled file input example" }), _jsx(Form.Control, { type: "file", disabled: true })] }), _jsxs(Form.Group, { controlId: "formFileSm", className: "mb-6 mb-md-8 mb-lg-12", children: [_jsx(Form.Label, { children: "Small file input example" }), _jsx(Form.Control, { type: "file", size: "sm" })] }), _jsxs(Form.Group, { controlId: "formFileLg", children: [_jsx(Form.Label, { children: "Large file input example" }), _jsx(Form.Control, { type: "file", size: "lg" })] })] }), _jsxs(Col, { xs: 12, children: [_jsx(Form.Label, { children: "Form Select" }), _jsxs(Form.Select, { "aria-label": "Default select example", children: [_jsx("option", { children: "Open this select menu" }), _jsx("option", { value: "1", children: "One" }), _jsx("option", { value: "2", children: "Two" }), _jsx("option", { value: "3", children: "Three" })] })] })] }) }));
};
export default EleFormControl;