import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/store";

export default function Contact({ user }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(user.id));

  return (
    <>
      <span>{user.name}</span>
      <span>{user.number}</span>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.object.isRequired,
};
