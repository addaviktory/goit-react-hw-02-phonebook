import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactsCatalogue/ContactsCatalogue';
import { ContactList } from './ContactsList.styled';

class ContactsList extends Component {
static propTypes = {
contacts: PropTypes.array.isRequired,
};

render() {
const { contacts, onDeleteContact } = this.props;
return (
  <ContactList>
    <ContactItem contacts={contacts} onDeleteContact={onDeleteContact} />
  </ContactList>
);
}
}

export default ContactsList;