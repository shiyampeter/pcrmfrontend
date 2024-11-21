import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageDashBreadcrumb from '@/components/Common/PageDashBreadcrumb';
import { Col, Row } from 'react-bootstrap';
import { CrmMiniCard, LatestLeads, LeadOverview, ProjectCustomerCard, ProjectStatisticChart, BillingStats, NewMeeting, RecentActivity, } from '@/components/Dashboards/CRM';
const CRM = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageDashBreadcrumb, { title: "CRM Dashboard", subName: "Dashboards" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xl: 12, children: _jsx(CrmMiniCard, {}) }), _jsx(Col, { xl: 8, children: _jsx(ProjectStatisticChart, {}) }), _jsx(Col, { xl: 4, children: _jsx(LeadOverview, {}) }), _jsx(Col, { xl: 8, children: _jsx(LatestLeads, {}) }), _jsx(Col, { xl: 4, children: _jsx(ProjectCustomerCard, {}) }), _jsx(Col, { xl: 4, children: _jsx(BillingStats, {}) }), _jsx(Col, { xl: 4, children: _jsx(NewMeeting, {}) }), _jsx(Col, { xl: 4, children: _jsx(RecentActivity, {}) })] })] }));
};
export default CRM;
