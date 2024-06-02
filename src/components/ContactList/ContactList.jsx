import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectContactsList } from '../../redux/contactsSlice';

export default function ContactList() {
  const selectContacts = useSelector(selectContactsList);

  return (
    <ul className={css.list}>
      {selectContacts.map(item => (
        <li key={item.id}>
          <Contact data={item} />
        </li>
      ))}
    </ul>
  );
}
