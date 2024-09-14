import PropTypes from "prop-types";

export default function Contact({ user, onDelete }) {
  return (
    <>
      <span>{user.name}</span>
      <span>{user.number}</span>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
