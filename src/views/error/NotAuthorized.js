import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CommonCard from './CommonCard';
import TitleHelmet from '@/components/Common/TitleHelmet';
const NotAuthorized = () => {
    const commonCardProps = {
        error: '401',
        errorTitle: 'You are not authorized!',
        errorMessage: 'You do not have permission to view this page using the credentials that you have provided.',
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "401 Not Authorized" }), _jsx(CommonCard, { ...commonCardProps })] }));
};
export default NotAuthorized;
