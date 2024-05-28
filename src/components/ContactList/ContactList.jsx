import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const selectContacts = useSelector(state =>
    state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(state.filters.name.toLowerCase())
    )
  );

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
