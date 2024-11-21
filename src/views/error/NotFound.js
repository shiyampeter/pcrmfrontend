import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CommonCard from './CommonCard';
import TitleHelmet from '@/components/Common/TitleHelmet';
const NotFound = () => {
    const commonCardProps = {
        error: '404',
        errorTitle: 'Opps! Page not found',
        errorMessage: "We are very sorry for inconvenience. The page you are looking for can't be found.",
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "404 Not Found" }), _jsx(CommonCard, { ...commonCardProps })] }));
};
export default NotFound;
