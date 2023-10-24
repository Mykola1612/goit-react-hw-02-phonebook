import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = data => {
    const contactExists = this.state.contacts.some(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number === data.number
    );

    if (contactExists) {
      alert(`${this.state.name} is already in contacts.`);
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  handleinputChangeFilter = data => {
    this.setState({
      filter: data,
    });
  };

  handleOnDelete = newContactsArray => {
    this.setState({
      contacts: newContactsArray,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter
          filter={this.handleinputChangeFilter}
          filterValue={this.state.filter}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleOnDelete={this.handleOnDelete}
        />
      </div>
    );
  }
}
