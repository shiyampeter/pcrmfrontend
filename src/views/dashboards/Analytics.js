import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Col, Row } from 'react-bootstrap';
import PageDashBreadcrumb from '@/components/Common/PageDashBreadcrumb';
import { BrowserUsed, CampaignState, SalesLocation, StatisticsMiniCard, SessionDevice, AnalyticPromoAction, VisitorsOverview, AnalyticProgress, } from '@/components/Dashboards/Analytics';
const Analytics = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageDashBreadcrumb, { title: "Analytics", subName: "Dashboards" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xl: 12, children: _jsx(StatisticsMiniCard, {}) }), _jsx(Col, { xl: 8, children: _jsx(VisitorsOverview, {}) }), _jsx(Col, { xl: 4, children: _jsx(AnalyticPromoAction, {}) }), _jsx(Col, { xl: 4, children: _jsx(SessionDevice, {}) }), _jsx(Col, { xl: 8, children: _jsx(CampaignState, {}) }), _jsx(Col, { xl: 4, children: _jsx(BrowserUsed, {}) }), _jsx(Col, { xl: 4, children: _jsx(SalesLocation, {}) }), _jsx(Col, { xl: 4, children: _jsx(AnalyticProgress, {}) })] })] }));
};
export default Analytics;
