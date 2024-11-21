import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import AccountSettingsNav from '@/components/Pages/AccountSettings/AccountSettingsNav';
import { SecurityComponent } from '@/components/Pages/AccountSettings/Security';
const Security = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Security" }), _jsx(AccountSettingsNav, {}), _jsx(SecurityComponent, {})] }));
};
export default Security;
