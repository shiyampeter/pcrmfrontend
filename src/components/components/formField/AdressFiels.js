import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, TextField, Typography } from '@mui/material';
import Autocomplete from 'react-google-autocomplete';
import React from 'react';
import { AddressFormater } from 'helpers/globalFunctions';
const AdressField = React.forwardRef((props, ref) => {
    const { Controller, control, name, required, disabled, error, onChange, setValue, label } = props;
    return (_jsxs(Box, { sx: {
            width: '100%',
        }, children: [_jsx(Controller, { name: name, control: control, render: ({ field }) => (_jsxs(_Fragment, { children: [_jsx(Typography, { sx: { fontWeight: 500, fontSize: '14px', mb: 1 }, children: label }), _jsx(Autocomplete, { defaultValue: field.value, className: "form-control", options: {
                                types: ['address'],
                                componentRestrictions: { country: 'aus' },
                            }, apiKey: import.meta.env.REACT_APP_GOOGLE_AUTOCOMPLETE_KEY, onPlaceSelected: (e) => {
                                field.onChange(e.formatted_address);
                                const formatted_address = AddressFormater(e);
                                setValue('latitude', formatted_address.latitude);
                                setValue('longitude', formatted_address.longitude);
                                setValue('city', formatted_address.city);
                            } }), _jsx("span", { children: error })] })) }), _jsx(Controller, { name: 'city', control: control, render: ({ field }) => (_jsxs(Box, { sx: {
                        display: 'none',
                    }, children: [_jsx(Typography, { sx: { fontWeight: 500, fontSize: '14px' }, children: "City" }), _jsx(TextField, { ...field, size: "small", value: String(field.value) })] })) }), _jsx(Controller, { name: 'latitude', control: control, render: ({ field }) => (_jsxs(Box, { sx: {
                        display: 'none',
                    }, children: [_jsx(Typography, { sx: { fontWeight: 500, fontSize: '14px' }, children: "Latitude" }), _jsx(TextField, { ...field, size: "small", value: field.value })] })) }), _jsx(Controller, { name: 'longitude', control: control, render: ({ field }) => (_jsxs(Box, { sx: {
                        display: 'none',
                    }, children: [_jsx(Typography, { sx: { fontWeight: 500, fontSize: '14px' }, children: "Latitude" }), _jsx(TextField, { ...field, size: "small", value: field.value })] })) })] }));
});
export default AdressField;
