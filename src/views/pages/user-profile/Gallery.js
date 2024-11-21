import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import { AllsGallery } from '@/components/Pages/UserProfile/Gallery';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
const Gallery = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Gallery" }), _jsx(ProfileCover, {}), _jsx(AllsGallery, {})] }));
};
export default Gallery;
