const FilterBySpecie = (props) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterSpecie(ev.target.value);
  };
  return (
    <>
      <label className="label-input label-specie">Search by specie:</label>
      <select onChange={handleChange} className="select-specie">
        <option value="all">All species</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecie;
