import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from './common/context';
import ThemeRoutes from './routes/Routes';
// Flaticons
import './../node_modules/@flaticon/flaticon-uicons/css/all/all.css';
// Theme.scss
import './assets/scss/theme.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// configureBackend()
function App() {
    return (_jsx(ThemeProvider, { children: _jsx(Provider, { store: store, children: _jsx(ThemeRoutes, {}) }) }));
}
export default App;
