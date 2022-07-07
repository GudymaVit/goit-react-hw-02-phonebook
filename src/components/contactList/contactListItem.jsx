import PropTypes from 'prop-types';

const ContactListItem = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  ));

ContactListItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
