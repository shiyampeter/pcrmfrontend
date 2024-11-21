import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { TextFields } from '@mui/icons-material';
const TempField = React.forwardRef((props, ref) => {
    const { label, placeholder, Controller, control, name, icon, required, disabled, display, error, type, maxLength, prefix, rightSection, } = props;
    return (_jsx(_Fragment, { children: _jsx(Controller, { name: name, control: control, render: ({ field }) => (_jsx(TextFields
            // display={display}
            // prefix={prefix}
            // type={type}
            // label={label}
            // variant="filled"
            // placeholder={placeholder}
            // error={error}
            // rightSection={rightSection}
            // icon={icon}
            // disabled={disabled}
            // required={required}
            , { ...field })) }) }));
});
export default TempField;
