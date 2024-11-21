import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import { colorOption } from './data/colorOption';
import 'flatpickr/dist/themes/airbnb.css';
import EventUpdateModal from './EventUpdateModal';
const AddEventModal = ({ showModal, handleCloseModal, handleAddEvent, events, setEvents, showUpdateEventModal, setShowUpdateEventModal, selectedEventForEdit, }) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventStartDate, setEventStartDate] = useState(new Date());
    const [eventEndDate, setEventEndDate] = useState(new Date());
    const [eventDescription, setEventDescription] = useState('');
    const [eventColor, setEventColor] = useState(null);
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isDescValid, setIsDescValid] = useState(true);
    const [isColorValid, setIsColorValid] = useState(true);
    const handleSave = () => {
        if (!eventTitle) {
            setIsTitleValid(false);
            return;
        }
        else {
            setIsTitleValid(true);
        }
        if (!eventDescription) {
            setIsDescValid(false);
            return;
        }
        else {
            setIsDescValid(true);
        }
        if (!eventColor) {
            setIsColorValid(false);
            return;
        }
        else {
            setIsColorValid(true);
        }
        const selectedColorValue = eventColor ? eventColor.value : '';
        const colorClassName = `fc-event-${selectedColorValue}-subtle`;
        const newEvent = {
            id: new Date().getTime().toString(),
            title: eventTitle,
            start: eventStartDate,
            end: eventEndDate,
            description: eventDescription,
            classNames: [colorClassName],
            extendedProps: {
                description: '',
            },
        };
        handleAddEvent(newEvent);
        handleCloseModal();
        setEventTitle('');
        setEventStartDate(new Date());
        setEventEndDate(new Date());
        setEventDescription('');
        setEventColor(null);
        setIsTitleValid(true);
        setIsDescValid(true);
        setIsColorValid(true);
    };
    return (_jsxs(_Fragment, { children: [_jsxs(Modal, { show: showModal, onHide: handleCloseModal, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Add Event" }) }), _jsx(Modal.Body, { children: _jsxs(Form, { children: [_jsxs(Form.Group, { className: "mb-4", controlId: "eventTitle", children: [_jsx(Form.Label, { children: "Title" }), _jsx(Form.Control, { type: "text", placeholder: "Enter event title", value: eventTitle, onChange: (e) => setEventTitle(e.target.value), isInvalid: !isTitleValid }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Title is required" })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "eventStartDate", children: [_jsx(Form.Label, { children: "Start Date" }), _jsx(Flatpickr, { className: "form-control", "data-enable-time": true, value: eventStartDate, onChange: (date) => setEventStartDate(date[0]) })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "eventEndDate", children: [_jsx(Form.Label, { children: "End Date" }), _jsx(Flatpickr, { className: "form-control", "data-enable-time": true, value: eventEndDate, onChange: (date) => setEventEndDate(date[0]) })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "eventDescription", children: [_jsx(Form.Label, { children: "Description" }), _jsx(Form.Control, { as: "textarea", placeholder: "Enter event description", value: eventDescription, onChange: (e) => setEventDescription(e.target.value), isInvalid: !isDescValid }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Description is required" })] }), _jsxs(Form.Group, { controlId: "eventColor", children: [_jsx(Form.Label, { children: "Color" }), _jsx(Select, { classNamePrefix: "select", className: `select ${isColorValid ? '' : 'is-invalid'}`, options: colorOption, value: eventColor, onChange: (selectedOption) => setEventColor(selectedOption) }), _jsx(Form.Control.Feedback, { type: "invalid", children: "Color is required" })] })] }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", onClick: handleCloseModal, className: "link-danger", children: "Close" }), _jsx(Button, { variant: "primary", onClick: handleSave, children: "Add Event" })] })] }), _jsx(EventUpdateModal, { show: showUpdateEventModal, handleCloseModal: () => setShowUpdateEventModal(false), selectedEvent: selectedEventForEdit, handleUpdateEvent: (updatedEvent) => {
                    const updatedEvents = events.map((event) => event.id === updatedEvent.id ? updatedEvent : event);
                    setEvents(updatedEvents);
                    setShowUpdateEventModal(false);
                } })] }));
};
export default AddEventModal;
