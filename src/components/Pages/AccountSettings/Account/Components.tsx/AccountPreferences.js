import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Select from 'react-select';
import { Col, Row, Form, Stack, ListGroup } from 'react-bootstrap';
const TimezoneOptions = [
    { value: 'UTC', label: 'Coordinated Universal Time (UTC)' },
    { value: 'America/New_York', label: 'Eastern Time (ET)' },
    { value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
    { value: 'Europe/London', label: 'British Time (BT)' },
    { value: 'Asia/Tokyo', label: 'Japan Standard Time (JST)' },
    { value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' },
    { value: 'Africa/Cairo', label: 'Eastern European Time (EET)' },
    { value: 'America/Chicago', label: 'Central Time (CT)' },
    { value: 'Asia/Dubai', label: 'Gulf Standard Time (GST)' },
    { value: 'Pacific/Auckland', label: 'New Zealand Standard Time (NZST)' },
];
const LanguageOptions = [
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'en', label: 'English' },
    { value: 'de', label: 'German' },
    { value: 'it', label: 'Italian' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ru', label: 'Russian' },
    { value: 'zh', label: 'Chinese' },
];
const AccountPreferences = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "mb-6 mb-md-12", children: [_jsx("h5", { className: "fw-semibold", children: "Account Preferences" }), _jsx("p", { children: "Your personalized preference displayed in your account" })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Public Profile" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsxs(ListGroup, { className: "mb-8", children: [_jsx(ListGroup.Item, { children: _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsxs("div", { children: [_jsx("div", { className: "fw-semibold text-dark mb-1", children: "Make contact info public" }), _jsx("span", { className: "text-muted d-block", children: "Means that anyone viwing your profile will able to see." })] }), _jsx("div", { className: "ms-auto", children: _jsx(Form.Check, { type: "switch", defaultChecked: true }) })] }) }), _jsx(ListGroup.Item, { children: _jsxs(Stack, { direction: "horizontal", gap: 4, children: [_jsxs("div", { children: [_jsx("div", { className: "fw-semibold text-dark mb-1", children: "Make data syncronize always" }), _jsx("span", { className: "text-muted d-block", children: "Means that your data syncronizing always on." })] }), _jsx("div", { className: "ms-auto", children: _jsx(Form.Check, { type: "switch" }) })] }) })] }) })] }), _jsxs(Row, { className: "g-md-4 mb-6 mb-md-8", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Timezone" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Select, { options: TimezoneOptions, defaultValue: TimezoneOptions.find((option) => option.value === 'Asia/Tokyo'), classNamePrefix: "select" }) })] }), _jsxs(Row, { className: "g-md-4 mb-4", children: [_jsx(Col, { md: 3, children: _jsx(Form.Label, { className: "fw-medium", children: "Language" }) }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Select, { options: LanguageOptions, defaultValue: LanguageOptions.find((option) => option.value === 'en'), classNamePrefix: "select" }) })] })] }));
};
export default AccountPreferences;
