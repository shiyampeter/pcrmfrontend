import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dropdown } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
const Status = ({ status, changeStatus }) => {
    const statusOptions = [
        { label: 'Busy', color: 'warning' },
        { label: 'Online', color: 'success' },
        { label: 'Offline', color: 'secondary' },
        { label: 'Inactive', color: 'danger' },
        { label: 'Invisible', color: 'black' },
        { label: 'Always', color: 'info' },
    ];
    const handleStatusChange = (newStatus) => {
        changeStatus(newStatus);
        const statusColor = statusOptions.find((opt) => opt.label === newStatus)?.color || 'primary';
        toast((t) => (_jsxs("span", { children: [_jsx("span", { className: `d-inline-block me-2 bg-${statusColor} rounded-circle`, style: { width: '12px', height: '12px' } }), _jsx("span", { children: `Status changed to ${newStatus}` })] })), {
            duration: 1000,
        });
    };
    return (_jsx(_Fragment, { children: _jsxs(Dropdown, { children: [_jsxs(Dropdown.Toggle, { split: true, variant: "", size: "sm", className: "px-0", children: [_jsx("span", { className: `me-1 bg-${statusOptions.find((opt) => opt.label === status)
                                ?.color} rounded-circle`, style: { width: '6px', height: '6px' } }), _jsx("span", { className: "fs-12 text-muted me-1", children: status })] }), _jsx(Dropdown.Menu, { style: { width: '100%', maxWidth: '12rem' }, children: statusOptions.map((option) => (_jsxs(Dropdown.Item, { onClick: () => handleStatusChange(option.label), children: [_jsx("span", { className: `d-inline-block bg-${option.color} rounded-circle me-2`, style: { width: '6px', height: '6px' } }), ' ', option.label] }, option.label))) })] }) }));
};
export default Status;
