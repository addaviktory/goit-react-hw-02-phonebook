import { Component } from 'react';
import { Form, Label, Input, SubmitButton } from './Contacts.styled';

export class Contacts extends Component {
  state = {
    name: '',
    number: '',
    contacts: [],
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    if (contacts.find(contact => contact.name === name || contact.number === number)) {
      alert('Contact already exists!');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number }],
      }));
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
          />
        </Label>

        <Label>
          Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Phone number"
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </Label>

        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}