import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Button, Card, Stack } from 'react-bootstrap';
import { events } from '@/components/Apps/Calendar/data/events';
import { AddEventModal, EventDetailModal, EventUpdateModal } from '@/components/Apps/Calendar';
import TitleHelmet from '@/components/Common/TitleHelmet';
function renderEventContent(eventInfo) {
    return (_jsxs(_Fragment, { children: [_jsx("span", { className: "fc-daygrid-event-dot" }), _jsx("strong", { children: eventInfo.timeText }), _jsx("span", { className: "ms-1", children: eventInfo.event.title })] }));
}
const Calendar = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [calendarEvents, setCalendarEvents] = useState(events);
    const [showAddEventModal, setShowAddEventModal] = useState(false);
    const [showUpdateEventModal, setShowUpdateEventModal] = useState(false);
    const handleEventClick = (eventClickInfo) => {
        setSelectedEvent(eventClickInfo.event);
    };
    const handleCloseModals = () => {
        setSelectedEvent(null);
        setShowAddEventModal(false);
        setShowUpdateEventModal(false);
    };
    const handleDeleteEvent = () => {
        if (selectedEvent) {
            const updatedEvents = calendarEvents.filter((event) => event.id !== selectedEvent.id);
            setCalendarEvents(updatedEvents);
            handleCloseModals();
            toast.success('Event deleted successfully!');
        }
    };
    const handleUpdateEvent = (updatedEvent) => {
        const updatedEvents = calendarEvents.map((event) => event.id === updatedEvent.id ? updatedEvent : event);
        setCalendarEvents(updatedEvents);
        handleCloseModals();
        toast.success('Event updated successfully!');
    };
    const handleAddEvent = (newEvent) => {
        const updatedNewEvent = {
            ...newEvent,
            id: 'default-event-id-' + Math.floor(Math.random() * 9999999),
        };
        setCalendarEvents([...calendarEvents, updatedNewEvent]);
        handleCloseModals();
        toast.success('Event added successfully!');
    };
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Calendar" }), _jsxs(Card, { children: [_jsxs(Card.Header, { className: "d-flex align-items-center justify-content-between", style: { height: '5rem' }, children: [_jsx("h4", { className: "fw-bold mb-0", children: "Calendar" }), _jsxs(Stack, { direction: "horizontal", gap: 2, children: [_jsx(Button, { variant: "neutral", className: "btn-icon btn-md rounded d-none d-md-flex", children: _jsx("i", { className: "fi fi-rr-settings" }) }), _jsxs(Button, { variant: "primary", className: "btn-md", onClick: () => setShowAddEventModal(true), children: [_jsx("i", { className: "fi fi-br-plus" }), _jsx("span", { className: "ms-2", children: "Add Event" })] })] })] }), _jsx(PerfectScrollbar, { className: "apps-scrollable-content", children: _jsx(FullCalendar, { events: calendarEvents, weekends: true, selectable: true, aspectRatio: 3, editable: true, droppable: true, nowIndicator: true, displayEventTime: true, themeSystem: "bootstrap5", initialView: "dayGridMonth", eventContent: renderEventContent, eventClick: handleEventClick, plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin], headerToolbar: {
                                left: 'prev,next title',
                                right: 'today dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                            }, views: {
                                dayGridMonth: {
                                    dayMaxEventRows: 3,
                                },
                            } }) })] }), _jsx(EventDetailModal, { selectedEvent: selectedEvent, handleCloseModal: handleCloseModals, handleDeleteEvent: handleDeleteEvent, handleUpdateEvent: handleUpdateEvent }), _jsx(AddEventModal, { showModal: showAddEventModal, handleCloseModal: () => setShowAddEventModal(false), handleAddEvent: handleAddEvent, events: calendarEvents, setEvents: setCalendarEvents, showUpdateEventModal: showUpdateEventModal, setShowUpdateEventModal: setShowUpdateEventModal, selectedEventForEdit: selectedEvent }), _jsx(EventUpdateModal, { show: showUpdateEventModal, handleCloseModal: () => setShowUpdateEventModal(false), selectedEvent: selectedEvent, handleUpdateEvent: handleUpdateEvent }), _jsx(Toaster, { position: "top-center" })] }));
};
export default Calendar;
