const Filter = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterName(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={props.filterByName} />
      </form>
      <p>{props.errorMessage}</p>
    </>
  );
};
export default Filter;
