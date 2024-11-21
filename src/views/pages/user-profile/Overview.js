import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import TitleHelmet from '@/components/Common/TitleHelmet';
import ProfileCover from '@/components/Pages/UserProfile/ProfileCover';
import { Card, Col, Row } from 'react-bootstrap';
import { OverviewIntroduction, OverviewCompleation, OverviewSkills, OverviewConnection, OverviewAbout, OverviewExperiences, OverviewInterested, } from '@/components/Pages/UserProfile/Overview';
const Overview = () => {
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Overview" }), _jsx(ProfileCover, {}), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsxs(Col, { lg: 5, xxl: 4, children: [_jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsx(OverviewCompleation, {}) }) }), _jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsx(OverviewIntroduction, {}) }) }), _jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsx(OverviewSkills, {}) }) }), _jsx(Card, { className: "mb-0", children: _jsx(Card.Body, { children: _jsx(OverviewConnection, {}) }) })] }), _jsxs(Col, { lg: 7, xxl: 8, children: [_jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsx(OverviewAbout, {}) }) }), _jsx(Card, { className: "mb-3 mb-md-4", children: _jsx(Card.Body, { children: _jsx(OverviewExperiences, {}) }) }), _jsx(Card, { className: "mb-0", children: _jsx(Card.Body, { children: _jsx(OverviewInterested, {}) }) })] })] })] }));
};
export default Overview;
