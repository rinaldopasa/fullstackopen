const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="form">
      <label>
        name:{" "}
        <input value={props.name} onChange={props.onNameChange} required />
      </label>
      <label>
        number:{" "}
        <input
          value={props.number}
          onChange={props.onNumberChange}
          type="tel"
          required
        />
      </label>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
