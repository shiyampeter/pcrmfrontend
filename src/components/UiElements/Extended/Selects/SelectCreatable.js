import { jsx as _jsx } from "react/jsx-runtime";
import CreatableSelect from 'react-select/creatable';
import { colourOptions } from './data';
export default () => (_jsx(CreatableSelect, { isClearable: true, options: colourOptions, classNamePrefix: "select" }));
