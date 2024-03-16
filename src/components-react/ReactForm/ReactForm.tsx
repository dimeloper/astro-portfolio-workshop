import { useState } from 'react';
import { SubmitButton } from './ReactButton.tsx';

import './form.css';

/**
 * React Form Component
 */
export default function ReactForm() {

    const [formState, setFormState] = useState({ name: '', message: '', email: '' });

    const nameChange = (event: any) => {
        setFormState({
            name: event.target.value,
            message: formState.message,
            email: formState.email,
        });
    };

    const messageChange = (event: any) => {
        setFormState({
            message: event.target.value,
            name: formState.name,
            email: formState.email,
        });
    };

    const emailChange = (event: any) => {
        setFormState({
            email: event.target.value,
            message: formState.message,
            name: formState.name,
        });
    };

    const notifyBrowser = () => {
        console.log('Form submitted successfully with state:', formState);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        notifyBrowser();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="name">Name</label>
            <input
                id="name"
                type="text"
                value={formState.name}
                onChange={nameChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={formState.email}
                onChange={emailChange}
            />
            <label htmlFor="message">Message</label>
            <input
                id="message"
                type="text"
                value={formState.message}
                onChange={messageChange}
            />
            <SubmitButton />
        </form>
    );
}