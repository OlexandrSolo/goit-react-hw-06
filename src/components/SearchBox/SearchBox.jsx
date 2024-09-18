import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const userInput = useSelector(selectNameFilter);
  const onFilter = (evt) => {
    const name = evt.target.value;
    dispatch(changeFilter(name));
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
