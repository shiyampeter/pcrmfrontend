import { jsx as _jsx } from "react/jsx-runtime";
import { Route, Navigate } from 'react-router-dom';
/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ component: Component, roles, ...rest }) => {
    const { isAuthenticated } = localStorage.getItem('token');
    return (_jsx(Route, { ...rest, render: (props) => {
            if (!isAuthenticated) {
                return (_jsx(Navigate, { to: {
                        pathname: '/auth/minimal/login',
                    } }));
            }
            if (isAuthenticated) {
                return _jsx(Navigate, { to: { pathname: '/dashboards' } });
            }
            return _jsx(Component, { ...props });
        } }));
};
export default PrivateRoute;
