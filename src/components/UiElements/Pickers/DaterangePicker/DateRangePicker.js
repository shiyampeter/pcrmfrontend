import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { DateRangePicker as Calendar } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const DateRangePicker = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection',
        },
    ]);
    return (_jsx(_Fragment, { children: _jsx(Calendar, { onChange: (item) => setState([item.selection]), moveRangeOnFirstSelection: false, months: 2, ranges: state, direction: "horizontal" }) }));
};
export default DateRangePicker;
