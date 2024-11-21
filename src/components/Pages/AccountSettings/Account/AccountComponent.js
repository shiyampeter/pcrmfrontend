import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card, Row, Col } from 'react-bootstrap';
import Saving from '@/components/Misc/Saving.tsx';
import { AccountAvatarCover, AccountInformation, AccountPreferences } from './Components.tsx';
const AccountComponent = () => {
    return (_jsx(_Fragment, { children: _jsx(Card, { children: _jsxs(Card.Body, { children: [_jsx(AccountAvatarCover, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsx(AccountInformation, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsx(AccountPreferences, {}), _jsx("hr", { className: "my-6 my-md-12" }), _jsxs(Row, { className: "g-md-4 mb-md-4", children: [_jsx(Col, { md: 3 }), _jsx(Col, { md: 9, xl: 8, xxl: 6, children: _jsx(Saving, { message: "Updated successfully" }) })] })] }) }) }));
};
export default AccountComponent;
