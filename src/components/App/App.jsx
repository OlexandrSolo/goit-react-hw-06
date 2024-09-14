import { useEffect, useState } from "react";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import initialContactList from "../../../contactList.json";

const getInitialValue = () => {
  const checkStorage = localStorage.getItem("contactList");
  return checkStorage ? JSON.parse(checkStorage) : initialContactList;
};

function App() {
  const [contactList, setContactList] = useState(getInitialValue);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const phoneBook = JSON.stringify(contactList);
    localStorage.setItem("contactList", phoneBook);
  }, [contactList]);

  const addNewUser = (newUser) => {
    setContactList((prevState) => [...prevState, newUser]);
  };

  const onDeleteUser = (contactId) => {
    return setContactList((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  const visiblePhoneBook = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={style.formWrapper}>
      <div className={style.container}>
        <ContactForm updateContactList={addNewUser} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList userList={visiblePhoneBook} onDelete={onDeleteUser} />
      </div>
    </div>
  );
}

export default App;
