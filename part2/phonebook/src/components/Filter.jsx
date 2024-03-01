const Filter = ({ search, onNameSearch }) => {
  return (
    <div>
      filter shown with{" "}
      <input value={search} onChange={onNameSearch} type="search" />
    </div>
  );
};

export default Filter;
