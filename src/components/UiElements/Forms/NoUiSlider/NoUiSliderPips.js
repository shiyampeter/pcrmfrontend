import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
const NoUiSliderPips = () => {
    return (_jsx(_Fragment, { children: _jsx(Nouislider, { start: [50], pips: { mode: 'count', values: 5 }, clickablePips: true, range: {
                min: 0,
                max: 100,
            } }) }));
};
export default NoUiSliderPips;
