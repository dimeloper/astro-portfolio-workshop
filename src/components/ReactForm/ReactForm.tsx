import { Component } from 'react';
import { SubmitButton } from './ReactButton.tsx';

import './form.css';

/**
 * React Form Component
 */
class ReactRegisterForm extends Component {
    constructor(props: any) {
        super(props);
        const open = false;

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
        };

        this.firstNameChange = this.firstNameChange.bind(this);
        this.lastNameChange = this.lastNameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    firstNameChange(event: any) {
        this.setState({
            firstName: event.target.value,
        });
        console.log(event.target.value);
    }

    lastNameChange(event: any) {
        this.setState({
            lastName: event.target.value,
        });
    }

    emailChange(event: any) {
        this.setState({
            email: event.target.value,
        });
    }

    notifyUser() {
        alert('Form submitted successfully!');
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.notifyUser();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <label htmlFor="fname">Name</label>
                <input
                    id="fname"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.firstNameChange}
                />
                <label htmlFor="lname">Last name</label>
                <input
                    id="lname"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.lastNameChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.emailChange}
                />
                <SubmitButton />
            </form>
        );
    }
}

export default ReactRegisterForm;