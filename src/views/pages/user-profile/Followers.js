import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
import { FollowersComponent } from '@/components/Pages/UserProfile/Followers';
const Followers = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Followers" }), _jsx(ProfileCover, {}), _jsx(FollowersComponent, {})] }));
};
export default Followers;
