import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import { colourOptions } from './data';
const SelectMultiple = () => {
    return (_jsx(_Fragment, { children: _jsx(Select, { defaultValue: [colourOptions[2], colourOptions[3]], isMulti: true, name: "colors", options: colourOptions, classNamePrefix: "select" }) }));
};
export default SelectMultiple;
