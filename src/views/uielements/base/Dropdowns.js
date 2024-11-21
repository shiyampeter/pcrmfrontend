import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import PageBreadcrumb from '@/components/Common/PageBreadcrumb';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { DropdownBasic, DropdownMenuSizing, DropdownSplit, DropdownTheme, DropdownThemeSoft, DropdownWithIcon, } from '@/components/UiElements/Base/Dropdowns';
const Dropdowns = () => {
    return (_jsxs(_Fragment, { children: [_jsx(PageBreadcrumb, { title: "Dropdowns", subName: "Base UI" }), _jsxs(Row, { className: "g-3 g-md-4", children: [_jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Basic" }) }), _jsx(Card.Body, { children: _jsx(DropdownBasic, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Split" }) }), _jsx(Card.Body, { children: _jsx(DropdownSplit, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "withIcon & Close" }) }), _jsx(Card.Body, { children: _jsx(DropdownWithIcon, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "menuSizing" }) }), _jsx(Card.Body, { children: _jsx(DropdownMenuSizing, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Theme" }) }), _jsx(Card.Body, { children: _jsx(DropdownTheme, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "ThemeSoft" }) }), _jsx(Card.Body, { children: _jsx(DropdownThemeSoft, {}) })] }) }), _jsx(Col, { xs: 12, children: _jsxs(Card, { children: [_jsx(Card.Header, { children: _jsx(Card.Title, { children: "Options" }) }), _jsxs(Table, { className: "mb-0", responsive: true, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Reference" }), _jsx("th", { children: "Details" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropdown" }) }), _jsxs("td", { children: ["Wrap the dropdown's toggle (your button or link) and the dropdown menu within", ' ', _jsx("code", { children: ".dropdown" }), ", or another element that declares", ' ', _jsx("code", { children: "position: relative;" }), ". Ideally, you should use a", ' ', _jsx("code", { children: "<button>" }), "element as the dropdown trigger, but the plugin will work with", ' ', _jsx("code", { children: "<a>" }), " elements as well. The examples shown here use semantic", ' ', _jsx("code", { children: "<ul>" }), " elements where appropriate, but custom markup is supported."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Split button" }) }), _jsxs("td", { children: ["Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of", ' ', _jsx("code", { children: ".dropdown-toggle-split" }), " for proper spacing around the dropdown caret.", _jsx("br", {}), "We use this extra class to reduce the horizontal", _jsx("code", { children: "padding" }), " on either side of the caret by 25% and remove the", ' ', _jsx("code", { children: "margin-left" }), " that's added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Sizing" }) }), _jsx("td", { children: "Button dropdowns work with buttons of all sizes, including default and split dropdown buttons." })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dark dropdowns" }) }), _jsxs("td", { children: ["Opt into darker dropdowns to match a dark navbar or custom style by adding", ' ', _jsx("code", { children: ".dropdown-menu-dark" }), " onto an existing ", _jsx("code", { children: ".dropdown-menu" }), ". No changes are required to the dropdown items."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Centered" }) }), _jsxs("td", { children: ["Make the dropdown menu centered below the toggle with", _jsx("code", { children: ".dropdown-center" }), " on the parent element."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropup" }) }), _jsxs("td", { children: ["Trigger dropdown menus above elements by adding", _jsx("code", { children: ".dropup" }), " to the parent element."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropup centered" }) }), _jsxs("td", { children: ["Make the dropup menu centered above the toggle with", _jsx("code", { children: ".dropup-center" }), " on the parent element."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropend" }) }), _jsxs("td", { children: ["Trigger dropdown menus at the right of the elements by adding", ' ', _jsx("code", { children: ".dropend" }), " to the parent element."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropstart" }) }), _jsxs("td", { children: ["Trigger dropdown menus at the left of the elements by adding", _jsx("code", { children: ".dropstart" }), " to the parent element."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Menu alignment" }) }), _jsxs("td", { children: ["By default, a dropdown menu is automatically positioned 100% from the top and along the left side of its parent. You can change this with the directional", ' ', _jsx("code", { children: ".drop*" }), "classes, but you can also control them with additional modifier classes. ", _jsx("br", {}), "Add ", _jsx("code", { children: ".dropdown-menu-end" }), " to a", _jsx("code", { children: ".dropdown-menu" }), " to right align the dropdown menu. Directions are mirrored when using Bootstrap in RTL, meaning ", _jsx("code", { children: ".dropdown-menu-end" }), " will appear on the left side."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Responsive alignment" }) }), _jsxs("td", { children: ["If you want to use responsive alignment, disable dynamic positioning by adding the", _jsx("code", { children: "data-bs-display=\"static\"" }), " attribute and use the responsive variation classes. ", _jsx("br", {}), "To align ", _jsx("strong", { children: "right" }), " the dropdown menu with the given breakpoint or larger, add", _jsx("code", { children: ".dropdown-menu(-sm -md -lg -xl -xxl)-end" }), ".", _jsx("br", {}), "To align ", _jsx("strong", { children: "left" }), " the dropdown menu with the given breakpoint or larger, add", _jsx("code", { children: ".dropdown-menu-end" }), " and", _jsx("code", { children: ".dropdown-menu(-sm -md -lg -xl -xxl)-start" }), ".", _jsx("br", {}), "Note that you don't need to add a", _jsx("code", { children: "data-bs-display=\"static\"" }), " attribute to dropdown buttons in navbars, since Popper isn't used in navbars."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Alignment options" }) }), _jsx("td", { children: "Taking most of the options shown above, here's a small kitchen sink demo of various dropdown alignment options in one place." })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Forms" }) }), _jsxs("td", { children: ["Put a form within a dropdown menu, or make it into a dropdown menu, and use", _jsx("a", { href: "/docs/5.3/utilities/spacing/", children: "margin or padding utilities" }), "to give it the negative space you require."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Dropdown options" }) }), _jsxs("td", { children: ["Use ", _jsx("code", { children: "data-bs-offset" }), " or", _jsx("code", { children: "data-bs-reference" }), " to change the location of the dropdown."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Auto close behavior " }) }), _jsxs("td", { children: ["By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the", _jsx("code", { children: "autoClose" }), " option to change this behavior of the dropdown."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "withIcon" }) }), _jsxs("td", { children: ["Use ", _jsx("code", { children: "(icon)" }), " with ", _jsx("code", { children: "(dropdown-item)" }), " as per your requiremnts."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "menuSizing" }) }), _jsxs("td", { children: ["Use ", _jsx("code", { children: "(menuSizing)" }), " with", _jsx("code", { children: "(dropdown-menu)" }), " as: ", _jsx("code", { children: ".dropdown-sm" }), ",", _jsx("code", { children: ".dropdown-md" }), ", ", _jsx("code", { children: ".dropdown-lg" }), ",", _jsx("code", { children: ".dropdown-xl" }), ",", ' ', _jsx("code", { children: ".dropdown-xxl" })] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Theme" }) }), _jsxs("td", { children: ["Use ", _jsx("code", { children: "(Theme)" }), " with ", _jsx("code", { children: "(.dropdown)" }), " as like:", ' ', _jsx("code", { children: ".dropdown-primary" }), ",", _jsx("code", { children: ".dropdown-secondary" }), ",", _jsx("code", { children: ".dropdown-success" }), ", ", _jsx("code", { children: ".dropdown-info" }), ",", _jsx("code", { children: ".dropdown-warning" }), ",", _jsx("code", { children: ".dropdown-danger" }), ", etc. Can use any", _jsx("code", { children: "($thems-colors)" }), " mapping colors."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "ThemeSoft" }) }), _jsxs("td", { children: ["Use ", _jsx("code", { children: "(ThemeSoft)" }), " with ", _jsx("code", { children: "(.dropdown)" }), "as like: ", _jsx("code", { children: ".dropdown-soft-primary" }), ",", _jsx("code", { children: ".dropdown-soft-secondary" }), ",", _jsx("code", { children: ".dropdown-soft-success" }), ",", _jsx("code", { children: ".dropdown-soft-info" }), ",", _jsx("code", { children: ".dropdown-soft-warning" }), ",", _jsx("code", { children: ".dropdown-soft-danger" }), ", etc. Can use any", _jsx("code", { children: "($thems-colors)" }), " mapping colors."] })] }), _jsxs("tr", { children: [_jsx("td", { children: _jsx("code", { children: "Documentations" }) }), _jsxs("td", { children: ["Please visit:", _jsx(Link, { to: "https://react-bootstrap.netlify.app/docs/components/dropdowns", target: "_blank", rel: "noopener noreferrer", children: "https://react-bootstrap.netlify.app/docs/components/dropdowns" })] })] })] })] })] }) })] })] }));
};
export default Dropdowns;
