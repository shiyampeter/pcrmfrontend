import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Select from 'react-select';
import { colourOptions, groupedOptions } from './data';
const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};
const SelectGrouped = (data) => (_jsxs("div", { style: groupStyles, children: [_jsx("span", { children: data.label }), _jsx("span", { style: groupBadgeStyles, children: data.options.length })] }));
export default () => (_jsx(Select, { defaultValue: colourOptions[1], options: groupedOptions, formatGroupLabel: SelectGrouped, classNamePrefix: "select" }));
