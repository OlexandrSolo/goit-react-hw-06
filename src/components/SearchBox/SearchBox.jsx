import { useId } from "react";
import PropTypes from "prop-types";
import style from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className={style.searchWrapper}>
      <input
        className={style.formInput}
        type="text"
        value={value}
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

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
