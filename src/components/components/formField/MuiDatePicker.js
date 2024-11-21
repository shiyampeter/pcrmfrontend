import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
export default function MuiDatePicker({ onError = () => { }, errorMessage = '', label = '', type = 'DatePicker', }) {
    return (_jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsxs(DemoContainer, { components: [type], children: [type === 'DatePicker' && (_jsx(DatePicker, { value: dayjs(), onError: true, slotProps: {
                        textField: {
                            helperText: errorMessage,
                        },
                    }, label: label })), type === 'TimePicker' && (_jsx(TimePicker, { value: dayjs(), onError: true, slotProps: {
                        textField: {
                            helperText: errorMessage,
                        },
                    }, label: label }))] }) }));
}
