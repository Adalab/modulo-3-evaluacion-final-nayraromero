import '../styles/components/filter.scss';
import '../styles/components/filterByName.scss';
import '../styles/components/filterBySpecie.scss';
import FilterByName from './FilterByName';
import FilterBySpecie from './FilterBySpecie';

const Filters = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <FilterByName
          handleFilterName={props.handleFilterName}
          filterByName={props.filterByName}
        />
        <FilterBySpecie
          handleFilterSpecie={props.handleFilterSpecie}
          filterBySpecie={props.filterBySpecie}
        />
      </form>
      <p className="error-message">{props.errorMessage}</p>
    </>
  );
};
export default Filters;
