import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Stack, Form } from 'react-bootstrap';
const ContactDetails = ({ onDelete, selectedContact }) => {
    if (!selectedContact) {
        return null;
    }
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
    const InviteOptions = [
        { value: 'Guest', label: 'Guest' },
        { value: 'Owner', label: 'Owner' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Editor', label: 'Editor' },
        { value: 'Viewer', label: 'Viewer' },
        { value: 'Member', label: 'Member' },
    ];
    const defaultEditorOption = InviteOptions.find((option) => option.value === 'Editor');
    const defaultViewerOption = InviteOptions.find((option) => option.value === 'Viewer');
    const { name, email, phone, role, joined, location, website, message, about } = selectedContact;
    return (_jsx(_Fragment, { children: _jsxs(PerfectScrollbar, { className: "px-4 py-4 h-100", children: [_jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Name:" }), _jsx(Col, { sm: 10, children: name })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Email:" }), _jsx(Col, { sm: 10, children: email })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Phone:" }), _jsx(Col, { sm: 10, children: phone })] }), _jsx("hr", { className: "my-8" }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Joined:" }), _jsx(Col, { sm: 10, children: joined })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Role:" }), _jsx(Col, { sm: 10, children: role })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Location:" }), _jsx(Col, { sm: 10, children: location })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Website:" }), _jsx(Col, { sm: 10, children: website })] }), _jsx("hr", { className: "my-8" }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Message:" }), _jsx(Col, { sm: 10, children: message })] }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "About:" }), _jsx(Col, { sm: 10, children: about })] }), _jsx("hr", { className: "my-8" }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Settings:" }), _jsxs(Col, { sm: 10, children: [_jsxs(Form.Check, { type: "switch", id: "check-api-notification", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleNotification(e.target.checked), defaultChecked: true }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Notification" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "You can enable or disable notification." })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-ignore-message", className: "mb-4", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleIgnoreMessages(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Ignore Messages" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "You won't be notified when message you." })] })] }), _jsxs(Form.Check, { type: "switch", id: "check-api-block-user", className: "mb-0", children: [_jsx(Form.Check.Input, { onChange: (e) => handleToggleBlockUser(e.target.checked) }), _jsxs(Form.Check.Label, { className: "ms-2", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Block User" }), _jsx("br", {}), _jsx("span", { className: "fs-13 text-muted", children: "Give feedback and report conversion." })] })] })] })] }), _jsx("hr", { className: "my-8" }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Contribution:" }), _jsxs(Col, { sm: 10, children: [_jsxs("div", { className: "d-md-flex align-items-center gap-4 mb-4", children: [_jsxs(Form.Check, { id: "radio-api-role-member", children: [_jsx(Form.Check.Input, { type: "radio", name: "invite-member-radio" }), _jsxs(Form.Check.Label, { className: "ms-2", htmlFor: "radio-api-role-member", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Team Member" }), _jsx("br", {}), _jsx("span", { className: "fs-13 fw-light ", children: "Can view, comment on, create and edit all of the projects within the wordspace." })] })] }), _jsx("div", { className: "ms-7 mt-2 ms-md-auto mt-md-0", style: { minWidth: '150px' }, children: _jsx(Select, { options: InviteOptions, classNamePrefix: "select", defaultValue: defaultEditorOption ? [defaultEditorOption] : [] }) })] }), _jsxs("div", { className: "d-md-flex align-items-center gap-4", children: [_jsxs(Form.Check, { id: "radio-api-role-contributor", children: [_jsx(Form.Check.Input, { type: "radio", name: "invite-member-radio" }), _jsxs(Form.Check.Label, { className: "ms-2", htmlFor: "radio-api-role-contributor", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Team Contributor" }), _jsx("br", {}), _jsx("span", { className: "fs-13 fw-light ", children: "Can view, comment on, create and edit projects within a wordspace that you have specifically selected." })] })] }), _jsx("div", { className: "ms-7 mt-2 ms-md-auto mt-md-0", style: { minWidth: '150px' }, children: _jsx(Select, { options: InviteOptions, classNamePrefix: "select", defaultValue: defaultViewerOption ? [defaultViewerOption] : [] }) })] })] })] }), _jsx("hr", { className: "my-8" }), _jsxs(Row, { className: "g-2 g-md-6 mb-6", children: [_jsx(Col, { sm: 2, className: "fw-medium text-muted", children: "Social:" }), _jsx(Col, { sm: 10, children: _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsx(Link, { to: "", children: _jsx("i", { className: "fi fi-brands-facebook" }) }), _jsx(Link, { to: "", children: _jsx("i", { className: "fi fi-brands-twitter" }) }), _jsx(Link, { to: "", children: _jsx("i", { className: "fi fi-brands-instagram" }) }), _jsx(Link, { to: "", children: _jsx("i", { className: "fi fi-brands-linkedin" }) })] }) })] })] }) }));
};
export default ContactDetails;
