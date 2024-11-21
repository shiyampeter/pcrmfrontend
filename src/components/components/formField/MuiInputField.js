import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
const MuiInputField = ({ label = '', error = false, message = '', id = '', value = '', handleChange = () => { }, name, }) => {
    return (_jsxs(FormControl, { error: error, variant: "standard", children: [_jsx(InputLabel, { htmlFor: id, children: label }), _jsx(Input, { value: value, onChange: handleChange, id: id, name: name, "aria-describedby": id }), _jsx(FormHelperText, { id: id, children: message })] }));
};
export default MuiInputField;
