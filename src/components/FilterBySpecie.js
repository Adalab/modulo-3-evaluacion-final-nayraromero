const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterSpecie(ev.target.value);
  };
  return (
    <>
      <label className="label-input label-specie">Search by specie:</label>
      <select
        onChange={handleChange}
        className="select-specie"
        value={props.filterBySpecie}
      >
        <option value="all" selected={props.filterBySpecie === 'all'}>
          All species
        </option>
        <option value="Human" selected={props.filterBySpecie === 'Human'}>
          Human
        </option>
        <option value="Alien" selected={props.filterBySpecie === 'Alien'}>
          Alien
        </option>
      </select>
    </>
  );
};
export default FilterBySpecie;
