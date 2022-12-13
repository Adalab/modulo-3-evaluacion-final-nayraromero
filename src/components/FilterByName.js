const Filter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.target.value);
  };
  return (
    <>
      <label className="label-input">Search by name:</label>
      <input
        type="text"
        onChange={handleChange}
        value={props.filterByName}
        className="form-input"
        placeholder="Ex: Alien Rick"
      />
    </>
  );
};
export default Filter;
