import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import AccountSettingsNav from '@/components/Pages/AccountSettings/AccountSettingsNav';
import { AccountComponent } from '@/components/Pages/AccountSettings/Account';
const Account = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Account" }), _jsx(AccountSettingsNav, {}), _jsx(AccountComponent, {})] }));
};
export default Account;
