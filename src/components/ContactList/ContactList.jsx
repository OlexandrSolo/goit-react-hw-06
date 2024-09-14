import PropTypes from "prop-types";
import style from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";

export default function ContactList({ userList, onDelete }) {
  return (
    <ul>
      {userList.map((user) => (
        <li key={user.id} className={style.contact}>
          <ContactListItem user={user} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  userList: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
