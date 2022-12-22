import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { ListBlock } from './ContactList.styled';
import { removeContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ListBlock>
      {contacts.map(contact => {
        const { id } = contact;
        return (
          <ContactItem
            key={id}
            contactItem={contact}
            onClick={() => dispatch(removeContact(id))}
          />
        );
      })}
    </ListBlock>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
