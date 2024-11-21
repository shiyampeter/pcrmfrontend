import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import PageDashBreadcrumb from '@/components/Common/PageDashBreadcrumb';
import { BestSellingCard, EarningBarCard, GrowthBarCard, PerformanceCard, RecentOrderList, SalesHistoryCard, SalesReportChart, StoreOverview, WeeklyStatsCard, } from '@/components/Dashboards/Ecommerce';
import { Col, Row } from 'react-bootstrap';
const Ecommerce = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageDashBreadcrumb, { title: "eCommerce", subName: "Dashboards" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xl: 4, children: _jsx(PerformanceCard, {}) }), _jsx(Col, { xl: 4, lg: 6, children: _jsx(GrowthBarCard, {}) }), _jsx(Col, { xl: 4, lg: 6, children: _jsx(EarningBarCard, {}) }), _jsx(Col, { xl: 8, children: _jsx(SalesReportChart, {}) }), _jsx(Col, { xl: 4, children: _jsx(StoreOverview, {}) }), _jsx(Col, { xl: 4, children: _jsx(WeeklyStatsCard, {}) }), _jsx(Col, { xl: 4, children: _jsx(BestSellingCard, {}) }), _jsx(Col, { xl: 4, children: _jsx(SalesHistoryCard, {}) }), _jsx(Col, { xl: 12, children: _jsx(RecentOrderList, {}) })] })] }));
};
export default Ecommerce;
