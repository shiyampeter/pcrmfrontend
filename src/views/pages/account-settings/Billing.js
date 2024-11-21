import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import AccountSettingsNav from '@/components/Pages/AccountSettings/AccountSettingsNav';
import { BillingComponent } from '@/components/Pages/AccountSettings/Billing';
const Billing = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Billing" }), _jsx(AccountSettingsNav, {}), _jsx(BillingComponent, {})] }));
};
export default Billing;
