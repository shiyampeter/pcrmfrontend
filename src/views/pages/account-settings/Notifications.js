import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import AccountSettingsNav from '@/components/Pages/AccountSettings/AccountSettingsNav';
import { NotificationsComponent } from '@/components/Pages/AccountSettings/Notifications';
const Notifications = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Notifications" }), _jsx(AccountSettingsNav, {}), _jsx(NotificationsComponent, {})] }));
};
export default Notifications;
