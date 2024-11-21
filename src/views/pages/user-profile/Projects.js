import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
import { ProjectsComponent } from '@/components/Pages/UserProfile/Projects';
const Projects = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Projects" }), _jsx(ProfileCover, {}), _jsx(ProjectsComponent, {})] }));
};
export default Projects;
