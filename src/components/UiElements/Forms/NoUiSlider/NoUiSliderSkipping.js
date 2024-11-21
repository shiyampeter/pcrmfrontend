import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Component } from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
class NoUiSliderSkipping extends Component {
    constructor(props) {
        super(props);
        Object.defineProperty(this, "onSkipSlide", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (render, handle, value, un, percent) => {
                this.setState({
                    skippingValue: value[0],
                });
            }
        });
        this.state = {
            skippingValue: 20,
        };
    }
    render() {
        const { skippingValue } = this.state;
        return (_jsxs(_Fragment, { children: [_jsx(Nouislider, { start: 20, snap: true, range: {
                        min: 0,
                        '10%': 10,
                        '20%': 20,
                        '30%': 30,
                        '50%': 50,
                        '60%': 60,
                        '70%': 70,
                        '90%': 90,
                        max: 100,
                    }, onSlide: this.onSkipSlide }), !!skippingValue && _jsxs("div", { children: ["Value: ", skippingValue] })] }));
    }
}
export default NoUiSliderSkipping;
