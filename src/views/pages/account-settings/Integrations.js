import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import AccountSettingsNav from '@/components/Pages/AccountSettings/AccountSettingsNav';
import { IntegrationsComponent } from '@/components/Pages/AccountSettings/Integrations';
const Integrations = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Integrations" }), _jsx(AccountSettingsNav, {}), _jsx(IntegrationsComponent, {})] }));
};
export default Integrations;
