import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import Select from 'react-select';
import { CustomSelectOption, CustomMultiValue, } from '@/components/UiElements/Extended/Selects/Components/CustomMultipleComponent';
import { CustomImageOptions } from '@/components/UiElements/Extended/Selects/data';
const InviteFriendModal = ({ show, inviteEmail, setInviteEmail, handleInviteClose, }) => {
    const [loading, setLoading] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [validationError, setValidationError] = useState(null);
    const handleInviteSubmit = () => {
        if (selectedOptions.length === 0) {
            setValidationError('Please select at least one item to send the invitation.');
            return;
        }
        setValidationError(null);
        setLoading(true);
        setTimeout(() => {
            toast.success('Invitation sent successfully');
            setLoading(false);
            handleInviteClose();
            setSelectedOptions([]);
        }, 2000);
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
    return (_jsxs(Modal, { centered: true, show: show, onHide: handleInviteClose, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Invite Friends" }) }), _jsxs(Modal.Body, { children: [validationError && (_jsx(Alert, { variant: "danger", className: "mb-3 text-danger", style: { borderStyle: 'dashed', padding: '0.75rem 1rem' }, children: validationError })), _jsx(Select, { isMulti: true, isSearchable: true, placeholder: "Select to invite....", options: CustomImageOptions, classNamePrefix: "select", components: {
                            Option: CustomSelectOption,
                            MultiValue: CustomMultiValue,
                        }, onChange: (options) => {
                            setValidationError(null);
                            setSelectedOptions(options);
                        } }), _jsx("hr", { className: "my-4" }), _jsxs("div", { className: "d-md-flex align-items-center gap-4 mb-4", children: [_jsxs(Form.Check, { id: "radio-api-role-member", children: [_jsx(Form.Check.Input, { type: "radio", name: "invite-member-radio" }), _jsxs(Form.Check.Label, { className: "ms-2", htmlFor: "radio-api-role-member", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Team Member" }), _jsx("br", {}), _jsx("span", { className: "fs-13 fw-light ", children: "Can view, comment on, create and edit all of the projects within the wordspace." })] })] }), _jsx("div", { className: "ms-7 mt-2 ms-md-auto mt-md-0", style: { minWidth: '150px' }, children: _jsx(Select, { options: InviteOptions, classNamePrefix: "select", defaultValue: defaultEditorOption ? [defaultEditorOption] : [] }) })] }), _jsxs("div", { className: "d-md-flex align-items-center gap-4", children: [_jsxs(Form.Check, { id: "radio-api-role-contributor", children: [_jsx(Form.Check.Input, { type: "radio", name: "invite-member-radio" }), _jsxs(Form.Check.Label, { className: "ms-2", htmlFor: "radio-api-role-contributor", children: [_jsx("span", { className: "fw-semibold text-dark", children: "Team Contributor" }), _jsx("br", {}), _jsx("span", { className: "fs-13 fw-light ", children: "Can view, comment on, create and edit projects within a wordspace that you have specifically selected." })] })] }), _jsx("div", { className: "ms-7 mt-2 ms-md-auto mt-md-0", style: { minWidth: '150px' }, children: _jsx(Select, { options: InviteOptions, classNamePrefix: "select", defaultValue: defaultViewerOption ? [defaultViewerOption] : [] }) })] })] }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "text-danger", onClick: handleInviteClose, children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: handleInviteSubmit, className: "text-white", disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("span", { className: "spinner-border spinner-border-sm me-2", role: "status", "aria-hidden": "true" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx("i", { className: "fi fi-rr-paper-plane me-2 fs-14" }), "Send Invite"] })) })] })] }));
};
export default InviteFriendModal;
