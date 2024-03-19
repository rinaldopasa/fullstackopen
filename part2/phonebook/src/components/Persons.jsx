const Persons = ({ persons, onRemove }) => {
  return (
    <menu className="persons">
      {persons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}{" "}
          <button onClick={() => onRemove(person.id, person.name)}>
            Delete
          </button>
        </li>
      ))}
    </menu>
  );
};

export default Persons;
