import '../styles/components/filter.scss';

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
      <form onSubmit={handleSubmit} className="form">
        <label className="label-input">Search by name:</label>
        <input
          type="text"
          onChange={handleChange}
          value={props.filterByName}
          className="form-input"
        />
      </form>
      <p className="error-message">{props.errorMessage}</p>
    </>
  );
};
export default Filter;
