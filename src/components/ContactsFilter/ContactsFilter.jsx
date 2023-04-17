import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { InputFilter, LabelFilter } from './ContactsFilter.styled';

class ContactsFilter extends Component {
static propTypes = {
onFilter: PropTypes.func.isRequired,
value: PropTypes.string.isRequired,
};

render() {
const { value, onFilter } = this.props;

return (
  <LabelFilter>
    Find contacts by name
    <InputFilter
      type="text"
      placeholder="Enter name of contact"
      value={value}
      onChange={onFilter}
    ></InputFilter>
  </LabelFilter>
);
}
}

export default ContactsFilter;