import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, Dropdown, Stack } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/captions.css';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import 'yet-another-react-lightbox/plugins/counter.css';
import Download from 'yet-another-react-lightbox/plugins/download';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Share from 'yet-another-react-lightbox/plugins/share';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import dataGalleryOne from './data/dataGalleryOne';
const GalleryOne = () => {
    const [index, setIndex] = useState(-1);
    return (_jsxs(_Fragment, { children: [_jsx("style", { children: `
          .yarl__icon {
            height: 24px;
            width: 24px;
          }
          .yarl__thumbnails_thumbnail { 
            width: 150px;
            height: 92px;
            border-color: #ced5e340;
          }
          .yarl__thumbnails_thumbnail_active {
            border-width: 2px;
            border-color: #00e700;
          }
          .yarl__slide_image {
            width: 100%;
            height: 100%;
            border-radius: 0.25rem;
          }
        ` }), _jsxs(Card, { children: [_jsxs(Card.Header, { className: "py-3 pe-3 d-flex justify-content-between align-items-center", children: [_jsx(Card.Title, { children: "Project albums" }), _jsx("div", { className: "ms-auto", children: _jsxs(Dropdown, { align: 'end', className: "flex-shrink-0 ms-2", children: [_jsx(Dropdown.Toggle, { variant: "soft-light", size: "sm", className: "rounded-pill", children: "Action" }), _jsxs(Dropdown.Menu, { children: [_jsx(Dropdown.Item, { href: "#!", children: "Invite" }), _jsx(Dropdown.Item, { href: "#!", children: "Rename" }), _jsx(Dropdown.Item, { href: "#!", children: "View Details" }), _jsx(Dropdown.Item, { href: "#!", children: "Add to Favorite" }), _jsx(Dropdown.Divider, {}), _jsx(Dropdown.Item, { href: "#!", className: "text-danger", children: "Delete" })] })] }) })] }), _jsxs(Card.Body, { children: [_jsx(PhotoAlbum, { photos: dataGalleryOne, layout: "masonry", targetRowHeight: 200, onClick: ({ index }) => setIndex(index) }), _jsx(Lightbox, { slides: dataGalleryOne, open: index >= 0, index: index, close: () => setIndex(-1), plugins: [Fullscreen, Slideshow, Thumbnails, Zoom, Download, Captions, Counter, Share] })] }), _jsx(Card.Footer, { children: _jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx("span", { className: "fs-13 text-muted", children: "23 Photos" }), _jsx("span", { className: "d-none d-lg-flex bg-secondary bg-opacity-50 rounded-circle", style: { width: '0.25rem', height: '0.25rem' } }), _jsx("span", { className: "fs-13 text-muted", children: "26 Mar, 2024" })] }) })] })] }));
};
export default GalleryOne;
