import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterList, searchContact } from "../../redux/store";
import PropTypes from "prop-types";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.filters.name);
  const onFilter = (name) => dispatch(searchContact(name));

  const id = useId();
  return (
    <div className={style.searchWrapper}>
      <input
        className={style.formInput}
        type="text"
        value={userInput}
        onChange={(evt) => onFilter(evt.target.value)}
        name="searchContact"
        id={`${id}-'searchContact'`}
      />
      <label className={style.formLabel} htmlFor={`${id}-'searchContact'`}>
        Find contacts by name
      </label>
    </div>
  );
}
