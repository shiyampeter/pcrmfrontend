import { jsx as _jsx } from "react/jsx-runtime";
import Select from 'react-select';
import { CustomSelectOption, CustomMultiValue } from './Components/CustomMultipleComponent';
import { CustomImageOptions } from './data';
const SelectCustomMultiple = () => {
    return (_jsx(Select, { isMulti: true, isSearchable: true, options: CustomImageOptions, components: {
            Option: CustomSelectOption,
            MultiValue: CustomMultiValue,
        }, classNamePrefix: "select" }));
};
export default SelectCustomMultiple;
