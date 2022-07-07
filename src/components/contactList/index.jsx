import ContactListItem from './contactListItem';
import styles from './contactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.contact_list}>
      <ContactListItem contacts={contacts} onDelete={onDelete} />
    </ul>
  );
};

export default ContactList;
