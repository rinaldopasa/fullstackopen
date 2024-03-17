const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="form">
      <label>
        name: <input value={props.name} onChange={props.onNameChange} />
      </label>
      <label>
        number:{" "}
        <input
          value={props.number}
          onChange={props.onNumberChange}
          type="tel"
        />
      </label>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
