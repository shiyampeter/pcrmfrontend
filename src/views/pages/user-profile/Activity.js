import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
import { ActivityComponent } from '@/components/Pages/UserProfile/Activity';
const Activity = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Activity" }), _jsx(ProfileCover, {}), _jsx(ActivityComponent, {})] }));
};
export default Activity;
