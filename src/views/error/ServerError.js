import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import CommonCard from './CommonCard';
import TitleHelmet from '@/components/Common/TitleHelmet';
const ServerError = () => {
    const commonCardProps = {
        error: '500',
        errorTitle: 'Internal server error!',
        errorMessage: 'There was an error with the internal server. Please contact your site administrator.',
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "500 Server Error" }), _jsx(CommonCard, { ...commonCardProps })] }));
};
export default ServerError;
