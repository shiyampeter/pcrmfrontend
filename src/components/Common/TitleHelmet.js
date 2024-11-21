import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Helmet } from 'react-helmet';
const TitleHelmet = ({ title }) => {
    return (_jsx(_Fragment, { children: _jsx(Helmet, { children: _jsxs("title", { children: [title, " | Window - React Admin & Dashboard"] }) }) }));
};
export default TitleHelmet;
