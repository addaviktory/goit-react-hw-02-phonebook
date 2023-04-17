import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import ContactsList from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

function App() {
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    setContacts(prevContacts => [...prevContacts, { ...data, id: nanoid() }]);
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="container">
      <h1>PhoneBook</h1>
      <Contacts onSubmit={formSubmitHandler} />

      <div>
        <h2>Contacts</h2>
        <ContactsFilter value={filter} onFilter={onFilter} />
        <ContactsList contacts={visibleContacts} onDeleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;