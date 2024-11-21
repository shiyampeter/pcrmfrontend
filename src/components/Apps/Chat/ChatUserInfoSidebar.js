import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PerfectScrollbar from 'react-perfect-scrollbar';
import { toast } from 'react-hot-toast';
import { Button, Col, Dropdown, Form, Row, Stack } from 'react-bootstrap';
import Avatar from '@/components/UiElements/Base/Avatars/Avatar';
const ChatUserInfoSidebar = ({ selectedChat, setSidebarRightToggle, }) => {
    const handleToggleNotification = (checked) => {
        if (checked) {
            toast.success('Notification enabled');
        }
        else {
            toast.error('Notification disabled');
        }
    };
    const handleToggleIgnoreMessages = (checked) => {
        if (checked) {
            toast.success('Ignore Messages enabled');
        }
        else {
            toast.error('Ignore Messages disabled');
        }
    };
    const handleToggleBlockUser = (checked) => {
        if (checked) {
            toast.success('Block User enabled');
        }
        else {
            toast.error('Block User disabled');
        }
    };
    const handleSidebarRightClose = () => {
        document.querySelector('.apps-card')?.classList.remove('apps-sidebar-right-toggle');
        setSidebarRightToggle(false);
    };
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "apps-sidebar apps-sidebar-right", children: [_jsxs(Stack, { direction: "horizontal", className: "px-3 border-bottom justify-content-between", style: { minHeight: '4.5rem' }, children: [_jsx(Button, { variant: "light", className: "btn-icon", onClick: handleSidebarRightClose, children: _jsx("i", { className: "fi fi-rr-arrow-left" }) }), _jsxs(Dropdown, { children: [_jsx(Dropdown.Toggle, { variant: "light", className: "btn-icon arrow-none", children: _jsx("i", { className: "fi fi-bs-menu-dots-vertical fs-14" }) }), _jsxs(Dropdown.Menu, { children: [_jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-thumbtack" }), _jsx("span", { className: "ms-3", children: "Pin" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-edit" }), _jsx("span", { className: "ms-3", children: "Edit" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-bell-slash" }), _jsx("span", { className: "ms-3", children: "Mute" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-brands-instagram" }), _jsx("span", { className: "ms-3", children: "Media" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-ban" }), _jsx("span", { className: "ms-3", children: "Block" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-triangle-warning" }), _jsx("span", { className: "ms-3", children: "Report" })] }), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-shield-check" }), _jsx("span", { className: "ms-3", children: "Security" })] }), _jsx(Dropdown.Divider, {}), _jsxs(Dropdown.Item, { children: [_jsx("i", { className: "fi fi-rr-settings" }), _jsx("span", { className: "ms-3", children: "Settings" })] })] })] })] }), _jsxs(PerfectScrollbar, { className: "h-100", children: [_jsxs(Stack, { gap: 3, className: "py-16 align-items-center text-center", children: [_jsx("div", { style: { width: '5rem', height: '5rem' }, children: _jsx(Avatar, { type: "image", src: selectedChat?.image || '' }) }), _jsxs("div", { className: "my-2", children: [_jsx("h6", { className: "mb-1", children: selectedChat?.name || 'User' }), _jsx("span", { className: "fs-13 text-muted", children: selectedChat?.role || 'No message' })] }), _jsxs("div", { className: "fs-11 fw-semibold text-uppercase px-2 py-1 border rounded-pill", children: [_jsx("span", { className: "fs-10 text-muted me-1", children: "Last Active:" }), _jsx("span", { className: "text-success", children: selectedChat?.time })] })] }), _jsx("hr", { className: "m-0" }), _jsxs("div", { className: "px-4 py-4", children: [_jsx("h6", { className: "fs-11 text-muted text-uppercase mb-3", children: "About Info" }), _jsx("p", { className: "mb-0", children: selectedChat?.about })] }), _jsx("hr", { className: "m-0" }), _jsxs("div", { className: "px-4 py-4", children: [_jsx("h6", { className: "fs-11 text-muted text-uppercase mb-4", children: "Personal Info" }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Fullname:" }), _jsx(Col, { sm: 8, children: selectedChat?.name })] }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Joined:" }), _jsx(Col, { sm: 8, children: selectedChat?.joined })] }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Email:" }), _jsx(Col, { sm: 8, children: selectedChat?.email })] }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Phone:" }), _jsx(Col, { sm: 8, children: selectedChat?.phone })] }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Location:" }), _jsx(Col, { sm: 8, children: selectedChat?.location })] }), _jsxs(Row, { className: "g-4 mb-3", children: [_jsx(Col, { sm: 4, className: "fw-semibold", children: "Website:" }), _jsx(Col, { sm: 8, children: selectedChat?.website })] })] }), _jsx("hr", { className: "m-0" }), _jsxs("div", { className: "px-4 py-4", children: [_jsx("h6", { className: "fs-11 text-muted text-uppercase mb-4", children: "Settings" }), _jsxs(Form.Check, { type: "switch", id: "check-api-notification", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleNotification(e.target.checked), defaultChecked: true }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Notification" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "You can enable or disable notification." })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-ignore-message", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleIgnoreMessages(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Ignore Messages" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "You won't be notified when message you." })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-block-user", className: "mb-0", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleBlockUser(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Block User" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "Give feedback and report conversion." })] })] })] })] })] }) }));
};
export default ChatUserInfoSidebar;
