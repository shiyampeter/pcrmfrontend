import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Nouislider from 'nouislider-react';
import 'nouislider/distribute/nouislider.css';
const NoUiSliderBasic = () => {
    return (_jsx(_Fragment, { children: _jsx(Nouislider, { range: { min: 0, max: 100 }, start: [20, 80], connect: true }) }));
};
export default NoUiSliderBasic;
