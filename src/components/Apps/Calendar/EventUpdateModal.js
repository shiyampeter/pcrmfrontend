import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Select from 'react-select';
import Flatpickr from 'react-flatpickr';
import { colorOption } from './data/colorOption';
import 'flatpickr/dist/themes/airbnb.css';
const EventUpdateModal = ({ show, handleCloseModal, selectedEvent, handleUpdateEvent, }) => {
    const [selectedColorLabel, setSelectedColorLabel] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        startTime: new Date(),
        endTime: null,
        description: '',
        color: '',
    });
    const handleUpdate = () => {
        if (selectedEvent) {
            const selectedColorValue = formData.color;
            const colorClassName = `fc-event-${selectedColorValue}-subtle`;
            const updatedEvent = {
                ...selectedEvent,
                id: selectedEvent.id.toString(),
                title: formData.title,
                start: formData.startTime ? new Date(formData.startTime) : null,
                end: formData.endTime ? new Date(formData.endTime) : null,
                classNames: [colorClassName],
                description: formData.description,
            };
            handleUpdateEvent(updatedEvent);
            handleCloseModal();
        }
    };
    useEffect(() => {
        if (selectedEvent) {
            const defaultColor = colorOption[0].value;
            const selectedColorValue = selectedEvent.classNames[0]?.replace('fc-event-', '').replace('-subtle', '') || defaultColor;
            setFormData({
                title: selectedEvent.title || '',
                startTime: selectedEvent.start || new Date(),
                endTime: selectedEvent.end || null,
                description: selectedEvent.extendedProps?.description || '',
                color: selectedColorValue,
            });
            const selectedOption = colorOption.find((option) => option.value === selectedColorValue);
            setSelectedColorLabel(selectedOption?.label);
        }
    }, [selectedEvent]);
    return (_jsxs(Modal, { centered: true, show: show, onHide: handleCloseModal, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Edit Event" }) }), _jsx(Modal.Body, { children: _jsxs(Form, { children: [_jsxs(Form.Group, { className: "mb-4", controlId: "formTitle", children: [_jsx(Form.Label, { children: "Event Title" }), _jsx(Form.Control, { type: "text", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }) })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "formStartTime", children: [_jsx(Form.Label, { children: "Start Time" }), _jsx(Flatpickr, { className: "form-control", "data-enable-time": true, value: formData.startTime || undefined, onChange: (date) => setFormData({
                                        ...formData,
                                        startTime: date && date.length > 0 ? date[0] : null,
                                    }) })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "formEndTime", children: [_jsx(Form.Label, { children: "End Time" }), _jsx(Flatpickr, { "data-enable-time": true, className: "form-control", value: formData.endTime || undefined, onChange: (date) => setFormData({
                                        ...formData,
                                        endTime: date && date.length > 0 ? date[0] : null,
                                    }) })] }), _jsxs(Form.Group, { className: "mb-4", controlId: "formDescription", children: [_jsx(Form.Label, { children: "Description" }), _jsx(Form.Control, { as: "textarea", rows: 3, value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }) })] }), _jsxs(Form.Group, { className: "mb-0", controlId: "formColor", children: [_jsx(Form.Label, { children: "Color" }), _jsx(Select, { classNamePrefix: "select", options: colorOption, value: { value: formData.color, label: selectedColorLabel }, onChange: (selectedOption) => {
                                        setFormData({
                                            ...formData,
                                            color: selectedOption?.value || '',
                                        });
                                        setSelectedColorLabel(selectedOption?.label);
                                    } })] })] }) }), _jsxs(Modal.Footer, { children: [_jsx(Button, { variant: "", className: "link-danger", onClick: handleCloseModal, children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: handleUpdate, children: "Save Changes" })] })] }));
};
export default EventUpdateModal;
