import { jsx as _jsx } from "react/jsx-runtime";
import { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
class FlatPickrDateTime extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "handleChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (dates) => {
                const [date] = dates;
                this.setState({ date });
            }
        });
        this.state = {
            date: new Date(),
        };
    }
    render() {
        return (_jsx(Flatpickr, { "data-enable-time": true, onChange: this.handleChange, className: "form-control", placeholder: "Select date..." }));
    }
}
export default FlatPickrDateTime;
