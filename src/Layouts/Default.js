import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { PreloaderFull } from '@/components/Misc/Preloader';
const DefaultLayout = ({ children }) => {
    return _jsx(Suspense, { fallback: _jsx(PreloaderFull, {}), children: children });
};
export default DefaultLayout;
