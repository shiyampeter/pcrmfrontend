import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { addDays, format, isWeekend } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { useThemeContext } from '@/common/context';
import colors from '@/constants/colors';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const DateRangeWeekend = () => {
    const { settings } = useThemeContext();
    const selectedColor = settings.color;
    const themeColor = colors[selectedColor] || selectedColor;
    const [state, setState] = useState({
        selection1: {
            startDate: addDays(new Date(), -6),
            endDate: new Date(),
            key: 'selection1',
        },
        selection2: {
            startDate: addDays(new Date(), 1),
            endDate: addDays(new Date(), 7),
            key: 'selection2',
        },
    });
    function customDayContent(day) {
        let extraDot = null;
        if (isWeekend(day)) {
            extraDot = (_jsx("div", { style: {
                    height: '5px',
                    width: '5px',
                    borderRadius: '100%',
                    background: themeColor,
                    position: 'absolute',
                    top: 2,
                    right: 2,
                } }));
        }
        return (_jsxs("div", { children: [extraDot, _jsx("span", { children: format(day, 'd') })] }));
    }
    return (_jsx(_Fragment, { children: _jsx(DateRangePicker, { onChange: (item) => setState({ ...state, ...item }), moveRangeOnFirstSelection: false, months: 2, ranges: [state.selection1, state.selection2], direction: "horizontal", dayContentRenderer: customDayContent }) }));
};
export default DateRangeWeekend;
