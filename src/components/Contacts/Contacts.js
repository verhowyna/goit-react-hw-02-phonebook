export const Contacts = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <li key={contact.id}>
            <span>{contact.name}:</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
