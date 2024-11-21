import { jsx as _jsx } from "react/jsx-runtime";
import Select from 'react-select';
import { CustomSelectOption, CustomControl } from './Components/CustomSingleComponent';
import { CustomImageOptions } from './data';
const SelectCustomSingle = () => {
    return (_jsx(Select, { isSearchable: true, options: CustomImageOptions, components: {
            Option: CustomSelectOption,
            Control: CustomControl,
        }, classNamePrefix: "select" }));
};
export default SelectCustomSingle;
