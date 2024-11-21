import { jsx as _jsx } from "react/jsx-runtime";
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { Close } from '@mui/icons-material';
import './style.css';
export default function SearchInput(props) {
    const { value, onChange, cancelSearch, sx, disabled } = props;
    return (_jsx(InputBase, { disabled: disabled, placeholder: "Search", className: "inputSearch", fullWidth: true, value: value || '', inputProps: {
            autoComplete: 'off',
        }, sx: sx, onChange: onChange, startAdornment: _jsx(Grid, { sx: { paddingLeft: '5px' }, children: _jsx(SearchIcon, {}) }), endAdornment: _jsx(Grid, { sx: { paddingRight: '5px' }, children: value ? _jsx(Close, { onClick: cancelSearch, sx: { cursor: 'pointer' } }) : '' }) }));
}
