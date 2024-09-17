// import { useEffect, useState } from "react";

import style from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
// import initialContactList from "../../../contactList.json";

// const getInitialValue = () => {
//   const checkStorage = localStorage.getItem("contactList");
//   return checkStorage ? JSON.parse(checkStorage) : initialContactList;
// };

function App() {
  // useEffect(() => {
  //   const phoneBook = JSON.stringify(contactList);
  //   localStorage.setItem("contactList", phoneBook);
  // }, [contactList]);

  return (
    <div className={style.formWrapper}>
      <div className={style.container}>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
