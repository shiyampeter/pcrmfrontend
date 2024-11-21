import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
const Loading = ({ style, className }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLoadMore = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };
    return (_jsx(_Fragment, { children: _jsx(Button, { variant: "soft-light", className: `btn-lg rounded-pill border ${className}`, type: "submit", disabled: isLoading, style: { width: '130px', ...style }, onClick: handleLoadMore, children: isLoading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Loading..."] })) : ('Load more...') }) }));
};
export default Loading;
