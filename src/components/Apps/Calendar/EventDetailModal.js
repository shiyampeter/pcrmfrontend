import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import EventUpdateModal from './EventUpdateModal';
const EventDetailModal = ({ selectedEvent, handleCloseModal, handleDeleteEvent: onDeleteEvent, handleUpdateEvent, }) => {
    const [events, setEvents] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const handleDeleteEvent = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this event!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3E97FF',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed && selectedEvent && selectedEvent.id) {
                const updatedEvents = events.filter((event) => event.id !== selectedEvent.id);
                setEvents(updatedEvents);
                onDeleteEvent();
            }
        });
    };
    const handleEditEvent = () => {
        setShowEditModal(true);
    };
    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Modal, { centered: true, show: selectedEvent !== null, onHide: handleCloseModal, children: [_jsx(Modal.Header, { closeButton: true, className: `${selectedEvent?.classNames.join(' ') || ''}`, children: _jsx(Modal.Title, { children: selectedEvent?.title }) }), _jsx(Modal.Body, { className: "py-12", children: _jsxs("div", { className: "row g-4", children: [_jsx("div", { className: "col-12", children: _jsxs("div", { className: "d-flex align-items-start gap-4", children: [_jsx("div", { children: _jsx("i", { className: "fi fi-rr-calendar-clock text-muted" }) }), _jsxs("div", { children: [_jsx("h6", { children: "Start Time" }), _jsx("p", { className: "fs-12 text-muted", id: "preview-event-start", children: selectedEvent?.start ? selectedEvent.start.toLocaleString() : 'No start time' })] })] }) }), selectedEvent?.end && (_jsx("div", { className: "col-12", id: "preview-event-end-check", children: _jsxs("div", { className: "d-flex align-items-start gap-4", children: [_jsx("div", { children: _jsx("i", { className: "fi fi-rr-calendar-check text-muted" }) }), _jsxs("div", { children: [_jsx("h6", { children: "End Time" }), _jsx("p", { className: "fs-12 text-muted", id: "preview-event-end", children: selectedEvent.end.toLocaleString() })] })] }) })), _jsx("div", { className: "col-12", id: "preview-event-description-check", children: _jsxs("div", { className: "d-flex align-items-start gap-4", children: [_jsx("div", { children: _jsx("i", { className: "fi fi-rr-poll-h text-muted" }) }), _jsxs("div", { children: [_jsx("h6", { children: "Description" }), _jsx("p", { className: "fs-13 text-muted mb-0", children: selectedEvent?.extendedProps.description })] })] }) })] }) }), _jsxs(Modal.Footer, { className: "justify-content-between", children: [_jsxs(Button, { variant: "", className: "btn-neutral", onClick: handleEditEvent, children: [_jsx("i", { className: "fi fi-rr-pen-nib" }), _jsx("span", { className: "ms-2", children: "Edit" })] }), _jsxs("div", { children: [_jsx(Button, { variant: "", className: "link-danger", onClick: handleCloseModal, children: _jsx("span", { className: "ms-2", children: "Cancel" }) }), _jsxs(Button, { variant: "", className: "btn-soft-danger", onClick: handleDeleteEvent, children: [_jsx("i", { className: "fi fi-rr-trash" }), _jsx("span", { className: "ms-2", children: "Delete" })] })] })] })] }), _jsx(EventUpdateModal, { show: showEditModal, handleCloseModal: handleCloseEditModal, selectedEvent: selectedEvent, handleUpdateEvent: handleUpdateEvent })] }));
};
export default EventDetailModal;
