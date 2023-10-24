import React from 'react';
import styles from './ContactList.module.css';

class ContactList extends React.Component {
  handleFilterContacts = () => {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  handleClickButtonDelete = e => {
    const { contacts, handleOnDelete } = this.props;
    const newContactsArray = contacts.filter(el => el.id !== e.target.id);
    console.log(newContactsArray);
    handleOnDelete(newContactsArray);
  };

  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <ul className={styles.list_contacts}>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id} className={styles.list_element}>
              {contact.name}: {contact.number}{' '}
              <button
                type="button"
                className={styles.button_contacts__list}
                onClick={this.handleClickButtonDelete}
                id={contact.id}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
