import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
class NoUiSliderNonlinear extends React.Component {
    constructor() {
        super(...arguments);
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {
                textValue: null,
                percent: null,
            }
        });
        Object.defineProperty(this, "onSlide", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (render, handle, value, un, percent) => {
                this.setState({
                    textValue: value[0].toFixed(2),
                    percent: percent[0].toFixed(2),
                });
            }
        });
    }
    render() {
        const { textValue, percent } = this.state;
        return (_jsxs("div", { children: [_jsx(Nouislider, { connect: true, start: [500, 4000], behaviour: "tap", range: {
                        min: [0],
                        '10%': [500, 500],
                        '50%': [4000, 1000],
                        max: [10000],
                    }, onSlide: this.onSlide }), textValue && percent && (_jsxs("div", { children: ["Value: ", textValue, ", ", percent, " %"] }))] }));
    }
}
export default NoUiSliderNonlinear;
