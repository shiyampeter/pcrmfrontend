import { jsx as _jsx } from "react/jsx-runtime";
import { Box, Grid, Typography } from '@mui/material';
import './style.css';
function TopBreaccrumb({ title, to }) {
    return (_jsx(Box, { sx: { my: 2 }, children: _jsx(Grid, { container: true, spacing: 2, className: "breaccrumbTopbar", children: _jsx(Grid, { item: true, xs: 12, sm: 6, md: 8, children: _jsx(Typography, { children: title }) }) }) }));
}
export default TopBreaccrumb;
