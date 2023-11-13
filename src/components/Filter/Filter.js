export const Filter = ({ onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={evt => onFilter(evt.target.value)}
      />
    </label>
  );
};
