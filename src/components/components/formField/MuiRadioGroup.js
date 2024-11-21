import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormHelperText } from '@mui/material';
export default function MuiRadioGroup({ helperText = '', error = false, radios = [] }) {
    return (_jsxs(FormControl, { error: error, children: [_jsx(FormLabel, { id: "demo-row-radio-buttons-group-label", children: "Task" }), _jsxs(RadioGroup, { row: true, value: 'weekly', "aria-labelledby": "demo-row-radio-buttons-group-label", name: "row-radio-buttons-group", children: [radios?.map((radio) => {
                        return _jsx(FormControlLabel, { value: radio?.value, control: _jsx(Radio, {}), label: radio?.label });
                    }), _jsx(FormControlLabel, { value: "day", control: _jsx(Radio, {}), label: "Daily" }), _jsx(FormControlLabel, { value: "weekly", control: _jsx(Radio, {}), label: "Weekly" }), _jsx(FormControlLabel, { value: "bi-weekly", control: _jsx(Radio, {}), label: "Bi Weekly" }), _jsx(FormControlLabel, { value: "monthly", control: _jsx(Radio, {}), label: "Monthly" })] }), _jsx(FormHelperText, { children: helperText })] }));
}
