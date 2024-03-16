import { useState } from 'react';
import { SubmitButton } from './ReactButton.tsx';

import './form.css';

/**
 * React Form Component
 */
export default function ReactForm() {

    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '' });

    const firstNameChange = (event: any) => {
        setFormState({
            firstName: event.target.value,
            lastName: formState.lastName,
            email: formState.email,
        });
    };

    const lastNameChange = (event: any) => {
        setFormState({
            lastName: event.target.value,
            firstName: formState.firstName,
            email: formState.email,
        });
    };

    const emailChange = (event: any) => {
        setFormState({
            email: event.target.value,
            lastName: formState.lastName,
            firstName: formState.firstName,
        });
    };

    const notifyUser = () => {
        alert('Form submitted successfully!');
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        notifyUser();
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="fname">Name</label>
            <input
                id="fname"
                type="text"
                value={formState.firstName}
                onChange={firstNameChange}
            />
            <label htmlFor="lname">Last name</label>
            <input
                id="lname"
                type="text"
                value={formState.lastName}
                onChange={lastNameChange}
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                value={formState.email}
                onChange={emailChange}
            />
            <SubmitButton />
        </form>
    );
}