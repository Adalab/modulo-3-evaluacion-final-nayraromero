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
        <input
          type="text"
          onChange={handleChange}
          value={props.filterByName}
          className="form-input"
        />
      </form>
      <p>{props.errorMessage}</p>
    </>
  );
};
export default Filter;
