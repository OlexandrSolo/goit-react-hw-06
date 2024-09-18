import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filters, selectFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const userInput = useSelector(selectFilter);
  const onFilter = (evt) => {
    const name = evt.target.value;
    dispatch(filters(name));
  };

  const id = useId();
  return (
    <div className={style.searchWrapper}>
      <input
        className={style.formInput}
        type="text"
        value={userInput}
        onChange={onFilter}
        name="searchContact"
        id={`${id}-'searchContact'`}
      />
      <label className={style.formLabel} htmlFor={`${id}-'searchContact'`}>
        Find contacts by name
      </label>
    </div>
  );
}
