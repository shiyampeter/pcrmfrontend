import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import { Stack, Form, InputGroup, Button } from 'react-bootstrap';
import PageBreadcrumb from '../Common/PageBreadcrumb';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
class PageDashBreadcrumb extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "handleDateChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (dates, str) => {
                this.setState({
                    range: dates,
                });
            }
        });
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 12);
        this.state = {
            range: [oneWeekAgo, new Date()],
        };
    }
    render() {
        return (_jsx(_Fragment, { children: _jsxs(Stack, { direction: "horizontal", className: "justify-content-between", children: [_jsx(PageBreadcrumb, { title: this.props.title, subName: this.props.subName }), _jsxs(Stack, { gap: 2, direction: "horizontal", className: "mt-2 mb-4 mb-md-6 d-none d-md-flex", children: [_jsx(Flatpickr, { value: this.state.range, options: { mode: 'range', wrap: true, dateFormat: 'd M Y' }, onChange: this.handleDateChange, children: _jsxs(InputGroup, { children: [_jsx(InputGroup.Text, { "data-toggle": true, children: _jsx("i", { className: "fi fi-rr-calendar-clock" }) }), _jsx(Form.Control, { "data-input": true, type: "text", placeholder: "Select date..." })] }) }), _jsxs(Button, { variant: "primary", children: [_jsx("i", { className: "fi fi-rr-stats" }), _jsx("span", { className: "ms-2", children: "Reports" })] })] })] }) }));
    }
}
export default PageDashBreadcrumb;
