import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
import { ContactsComponent } from '@/components/Pages/UserProfile/Contacts';
const Contacts = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Contacts" }), _jsx(ProfileCover, {}), _jsx(ContactsComponent, {})] }));
};
export default Contacts;
