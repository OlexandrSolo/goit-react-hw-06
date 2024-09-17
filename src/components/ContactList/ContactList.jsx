import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import style from "./ContactList.module.css";

import ContactListItem from "../Contact/Contact";
import { filterList } from "../../redux/store";

const getVisibleContact = (contactList, name) => {
  // if (name === "") {
  //   return contactList;
  // }
  // return contactList.filter(
  //   (contact) => contact.name.toLowerCase() === name.toLowerCase()
  // );
};

export default function ContactList() {
  const contactList = useSelector((state) => state.contacts.items);
  const userName = useSelector((state) => state.filters.name);
  // const newList = getVisibleContact(contactList, userName);

  return (
    <ul>
      {contactList.map((user) => (
        <li key={user.id} className={style.contact}>
          <ContactListItem user={user} />
        </li>
      ))}
    </ul>
  );
}
