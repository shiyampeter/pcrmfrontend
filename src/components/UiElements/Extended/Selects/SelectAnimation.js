import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colourOptions } from './data';
const animatedComponents = makeAnimated();
const SelectSingle = () => {
    return (_jsx(_Fragment, { children: _jsx(Select, { closeMenuOnSelect: false, components: animatedComponents, defaultValue: [colourOptions[4], colourOptions[5]], isMulti: true, options: colourOptions, classNamePrefix: "select" }) }));
};
export default SelectSingle;
