import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Modal, Stack } from 'react-bootstrap';
const ModalTheme = () => {
    const [modals, setModals] = useState([
        {
            show: false,
            handleClose: () => setModalState('Primary', false),
            handleShow: () => setModalState('Primary', true),
        },
        {
            show: false,
            handleClose: () => setModalState('Secondary', false),
            handleShow: () => setModalState('Secondary', true),
        },
        {
            show: false,
            handleClose: () => setModalState('Success', false),
            handleShow: () => setModalState('Success', true),
        },
        {
            show: false,
            handleClose: () => setModalState('Info', false),
            handleShow: () => setModalState('Info', true),
        },
        {
            show: false,
            handleClose: () => setModalState('Warning', false),
            handleShow: () => setModalState('Warning', true),
        },
        {
            show: false,
            handleClose: () => setModalState('Danger', false),
            handleShow: () => setModalState('Danger', true),
        },
    ]);
    const setModalState = (key, value) => {
        setModals((prevModals) => prevModals.map((modal, index) => {
            if (index === colors.indexOf(key)) {
                return { ...modal, show: value };
            }
            return modal;
        }));
    };
    const colors = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'];
    return (_jsxs(_Fragment, { children: [_jsx(Stack, { direction: "horizontal", gap: 1, className: "flex-wrap", children: colors.map((variant, idx) => (_jsx(Button, { variant: "", onClick: modals[idx].handleShow, className: `d-inline-block btn-${variant.toLowerCase()}`, children: variant }, idx))) }), colors.map((variant, idx) => (_jsxs(Modal, { show: modals[idx].show, onHide: modals[idx].handleClose, className: `modal-theme-${variant.toLowerCase()}`, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: `${variant} Modal` }) }), _jsx(Modal.Body, { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et, necessitatibus cupiditate nemo corrupti possimus nesciunt ipsa numquam ea earum velit laboriosam eos omnis officia nam similique neque fuga pariatur. Vitae similique porro adipisci sunt? Sequi, qui dolorem veritatis nobis soluta deserunt illum iure. Asperiores neque eveniet veritatis voluptatem reprehenderit eius repellendus beatae cum ullam, fugit, vero rerum quis consequatur ratione, a facere voluptatum minus doloribus autem molestias. Temporibus deserunt ipsam unde neque impedit enim, fugiat ullam. Quo recusandae cumque nobis, placeat, modi voluptates nemo dicta ullam voluptate laudantium aliquid necessitatibus sit, aliquam deserunt atque dolorum molestiae? Tempora, nostrum nam?" }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "btn bg-white text-black", onClick: modals[idx].handleClose, children: "Close" }), _jsx(Button, { variant: "", className: "btn bg-white text-black", children: "Save Changes" })] })] }, idx)))] }));
};
export default ModalTheme;
