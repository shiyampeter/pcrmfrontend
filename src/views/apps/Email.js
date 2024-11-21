import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Preloader } from '@/components/Misc/Preloader';
import { Button, Card, Stack } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { EmailDetails, EmailDetailsHeader, EmailHeader, EmailList, EmailSearchBar, EmailSidebar, } from '@/components/Apps/Email';
import ComposeEmailModal from '@/components/Apps/Email/ComposeEmailModal';
import emailItems from '@/components/Apps/Email/data/emailItems';
import TitleHelmet from '@/components/Common/TitleHelmet';
const Email = () => {
    const [selectedCategory, setSelectedCategory] = useState('inbox');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredEmails, setFilteredEmails] = useState(emailItems);
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [selectedEmailIndex, setSelectedEmailIndex] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [showComposeModal, setShowComposeModal] = useState(false);
    const [containerToggle, setContainerToggle] = useState(false);
    const [sidebarLeftToggle, setSidebarLeftToggle] = useState(false);
    const [sidebarMiniToggle, setSidebarMiniToggle] = useState(false);
    const handleCompose = (emailData) => {
        console.log('Composed Email:', emailData);
    };
    const categories = [
        {
            name: 'Inbox',
            value: 'inbox',
            icon: 'fi-rr-envelope-plus',
            badge: 5,
            badgeClassName: 'bg-primary-subtle text-primary',
        },
        { name: 'Sent', value: 'sent', icon: 'fi-rr-paper-plane' },
        { name: 'Starred', value: 'starred', icon: 'fi-rr-star' },
        {
            name: 'Draft',
            value: 'draft',
            icon: 'fi-rr-pen-nib',
            badge: 3,
            badgeClassName: 'bg-danger-subtle text-danger',
        },
        { name: 'Spam', value: 'spam', icon: 'fi-rr-triangle-warning' },
        { name: 'Trash', value: 'trash', icon: 'fi-rr-trash' },
    ];
    const labels = [
        { name: 'Updates', value: 'updates', gradient: 'primary' },
        { name: 'Important', value: 'important', gradient: 'success' },
        { name: 'Personal', value: 'personal', gradient: 'warning' },
        { name: 'Private', value: 'private', gradient: 'danger' },
    ];
    useEffect(() => {
        setFilteredEmails(emailItems.filter((item) => item.inbox));
    }, []);
    const handleSearch = (value) => {
        setSearchTerm(value);
        const filteredEmailsByCategory = emailItems.filter((item) => item[selectedCategory]);
        const filteredEmailsBySearch = filteredEmailsByCategory.filter((item) => item.message.toLowerCase().includes(value.toLowerCase()));
        setFilteredEmails(filteredEmailsBySearch);
    };
    const handleCategoryChange = (categoryValue) => {
        setSelectedCategory(categoryValue);
        setSearchTerm('');
        if (labels.find((label) => label.value === categoryValue)) {
            setFilteredEmails(emailItems.filter((item) => {
                if (typeof item.label === 'object') {
                    return item.label.value === categoryValue;
                }
                else {
                    return item.label && item.label.includes(categoryValue);
                }
            }));
        }
        else {
            setFilteredEmails(emailItems.filter((item) => item[categoryValue]));
        }
    };
    const handleEmailItemClick = (email) => {
        setSelectedEmail(email);
    };
    const handleStarChange = (emailId, isStarred) => {
        const updatedEmails = filteredEmails.map((item) => item.id === emailId ? { ...item, starred: isStarred } : item);
        setFilteredEmails(updatedEmails);
    };
    const handleDeleteEmail = () => {
        if (selectedEmail) {
            Swal.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this email!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3E97FF',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    setLoading(true);
                    setTimeout(() => {
                        const updatedEmails = emailItems.filter((item) => item.id !== selectedEmail.id);
                        emailItems.splice(0, emailItems.length, ...updatedEmails);
                        const filteredEmailsByCategory = updatedEmails.filter((item) => item[selectedCategory]);
                        setFilteredEmails(filteredEmailsByCategory);
                        if (filteredEmailsByCategory.length === 0) {
                            setFilteredEmails([]);
                        }
                        setSelectedEmail(null);
                        setContainerToggle(false);
                        setSidebarLeftToggle(false);
                        setLoading(false);
                        toast.success('Email deleted successfully');
                    }, 1500);
                }
            });
        }
    };
    useEffect(() => {
        const index = filteredEmails.findIndex((email) => email.id === (selectedEmail?.id || ''));
        setSelectedEmailIndex(index);
    }, [filteredEmails, selectedEmail]);
    const handleNext = () => {
        if (selectedEmailIndex < filteredEmails.length - 1) {
            const nextIndex = selectedEmailIndex + 1;
            setSelectedEmail(filteredEmails[nextIndex]);
        }
    };
    const handlePrev = () => {
        if (selectedEmailIndex > 0) {
            const prevIndex = selectedEmailIndex - 1;
            setSelectedEmail(filteredEmails[prevIndex]);
        }
    };
    useEffect(() => {
        if (sidebarMiniToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-sidebar-mini-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-mini-toggle');
        }
    }, [sidebarMiniToggle]);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 991.98 && sidebarLeftToggle) {
                document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
            }
        };
        if (sidebarLeftToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-sidebar-left-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-sidebar-left-toggle');
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [sidebarLeftToggle]);
    useEffect(() => {
        if (containerToggle) {
            document.querySelector('.apps-card')?.classList.add('apps-container-toggle');
        }
        else {
            document.querySelector('.apps-card')?.classList.remove('apps-container-toggle');
        }
    }, [containerToggle]);
    return (_jsxs(_Fragment, { children: [_jsx(TitleHelmet, { title: "Email" }), _jsxs(Card, { className: `apps-card ${sidebarMiniToggle ? 'apps-sidebar-mini-toggle' : ''}`, children: [_jsx("div", { className: "apps-sidebar-mini", children: _jsx(EmailSidebar, { categories: categories, labels: labels, selectedCategory: selectedCategory, handleCategoryChange: handleCategoryChange, setSidebarMiniToggle: setSidebarMiniToggle }) }), _jsxs("div", { className: "apps-sidebar apps-sidebar-left", children: [_jsx(EmailHeader, { selectedCategory: selectedCategory, labels: labels, categories: categories, sidebarMiniToggle: sidebarMiniToggle, setSidebarMiniToggle: setSidebarMiniToggle }), _jsx(EmailSearchBar, { searchTerm: searchTerm, handleSearch: handleSearch }), _jsx(EmailList, { filteredEmails: filteredEmails, selectedEmail: selectedEmail, handleEmailItemClick: handleEmailItemClick, setLoading: setLoading, setFilteredEmails: setFilteredEmails, setContainerToggle: setContainerToggle, setSidebarMiniToggle: setSidebarMiniToggle })] }), _jsx("div", { className: "apps-container", children: _jsx("div", { className: "apps-container-inner", children: loading ? (_jsx(Stack, { className: "align-items-center justify-content-center flex-grow-1 h-100 ", children: _jsx(Preloader, {}) })) : !selectedEmail ? (_jsxs(Stack, { className: "d-none d-lg-flex align-items-center justify-content-center flex-grow-1 h-100 mx-auto text-center", style: { maxWidth: '320px' }, children: [_jsx("i", { className: "fi fi-rr-envelope-dot fs-48 mb-6" }), _jsx("h4", { className: "fw-bold", children: "Select a mail to read" }), _jsx("p", { className: "fs-15 fw-light text-muted mb-4", children: "Select a mail to read from left sidebar email list, and start your conversation." }), _jsxs(Button, { variant: "", className: "btn-neutral", onClick: () => setShowComposeModal(true), children: [_jsx("i", { className: "fi fi-br-plus fs-10" }), _jsx("span", { className: "ms-2", children: "New Message" })] })] })) : (_jsxs(_Fragment, { children: [_jsx(EmailDetailsHeader, { onDelete: handleDeleteEmail, handlePrev: handlePrev, handleNext: handleNext, selectedEmail: selectedEmail, selectedEmailIndex: selectedEmailIndex, setSelectedEmail: setSelectedEmail, filteredEmails: filteredEmails, onStarChange: handleStarChange, setFilteredEmails: setFilteredEmails, setContainerToggle: setContainerToggle, sidebarLeftToggle: sidebarLeftToggle, setSidebarLeftToggle: setSidebarLeftToggle }), _jsx(EmailDetails, { selectedEmail: selectedEmail }, selectedEmail?.id)] })) }) }), _jsx("div", { className: "custom-backdrop", onClick: () => setSidebarMiniToggle(false) })] }), _jsx(ComposeEmailModal, { show: showComposeModal, onHide: () => setShowComposeModal(false), onCompose: handleCompose })] }));
};
export default Email;
