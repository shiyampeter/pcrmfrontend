import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { DateRange as ReactDateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const DateRange = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: undefined,
            key: 'selection',
        },
    ]);
    return (_jsx(_Fragment, { children: _jsx(ReactDateRange, { editableDateInputs: true, onChange: (item) => setState([item.selection]), moveRangeOnFirstSelection: false, ranges: state }) }));
};
export default DateRange;
