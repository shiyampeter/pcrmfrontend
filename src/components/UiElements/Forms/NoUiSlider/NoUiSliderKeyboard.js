import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
const NoUiSliderKeyboard = () => {
    const sliderOptions = {
        start: 10,
        step: 10,
        range: {
            min: 0,
            max: 100,
        },
        accessibility: {
            enabled: true,
        },
    };
    return (_jsx(_Fragment, { children: _jsx(Nouislider, { ...sliderOptions }) }));
};
export default NoUiSliderKeyboard;
