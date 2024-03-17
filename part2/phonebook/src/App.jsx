import { useEffect, useState } from "react";
import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  const checkPerson = (personName) =>
    persons.find((person) => person.name === personName);

  const clearForm = () => {
    setNewName("");
    setNewNumber("");
  };

  const handleAddPerson = (event) => {
    event.preventDefault();

    const existPerson = checkPerson(newName);

    if (existPerson !== undefined) {
      handleUpdatePerson(existPerson);
      return;
    }

    const id = (persons.length + 1).toString();
    const newPerson = {
      id,
      name: newName,
      number: newNumber,
    };

    personService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      clearForm();
    });
  };

  const handleUpdatePerson = (existPerson) => {
    if (
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      const updatedPerson = { ...existPerson, number: newNumber };
      personService
        .update(existPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.with(persons.indexOf(existPerson), returnedPerson)
          );
          clearForm();
        });
    }
  };

  const handleRemovePerson = (personId, personName) => {
    if (window.confirm(`Delete ${personName} ?`)) {
      personService.remove(personId).then((returnedPerson) => {
        setPersons(persons.toSpliced(persons.indexOf(returnedPerson), 1));
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleNameSearch = (event) => setSearch(event.target.value);

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter search={search} onNameSearch={handleNameSearch} />

      <h2>Add a new</h2>
      <PersonForm
        name={newName}
        number={newNumber}
        onSubmit={handleAddPerson}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={filteredPersons} onRemove={handleRemovePerson} />
    </div>
  );
};

export default App;
