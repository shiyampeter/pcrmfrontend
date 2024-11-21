import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'react-bootstrap';
import PageBreadcrumbButton from '@/components/Common/PageBreadcrumbButton';
import { IconsFlaticon } from '@/components/UiElements/Icons';
const Flaticon = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumbButton, { title: "Flaticon", subName: "Icons", url: 'https://www.flaticon.com/uicons/interface-icons' }), _jsx(Row, { className: "g-3 g-md-4", children: _jsx(Col, { xs: 12, children: _jsx(IconsFlaticon, {}) }) })] }));
};
export default Flaticon;
