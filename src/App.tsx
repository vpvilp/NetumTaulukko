import { useState, Fragment } from "react";
import "./App.css";
import data from "./data.json";
import {nanoid} from "nanoid";
import ReadOnlyRow from "./komponentit/ReadOnlyRow";
import EditableRow from "./komponentit/EditableRow";




const App = () => {
  const [Tiedot, setTiedot] = useState(data);
  
  const [addFormData, setAddFormData] = useState({
    id: "",
    enimi: "",
    snimi: "",
    ika: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    enimi: "",
    snimi: "",
    ika: "",
  });

  const [editTietoId, setEditTietoId] = useState(null);

  
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
};

const handleEditFormChange = (event) => {
  event.preventDefault();

  const fieldName = event.target.getAttribute("name");
  const fieldValue = event.target.value;

  const newFormData = {...editFormData};
  newFormData[fieldName] = fieldValue;

  setEditFormData(newFormData);
};

  function handleAddFormSubmit(event) {
    event.preventDefault();

    const uusiTieto = {
      id: nanoid(),
      enimi: addFormData.enimi,
      snimi: addFormData.snimi,
      ika: addFormData.ika
    };

    const uudetTiedot = [...Tiedot, uusiTieto];
    setTiedot(uudetTiedot);
  }

const handleEditFormSubmit = (event) => {
  event.preventDefault();

  const editedTieto = {
    id: editTietoId,
    enimi: editFormData.enimi,
    snimi: editFormData.snimi,
    ika: editFormData.ika
  }

  const uudetTiedot = [...Tiedot];

  const index = Tiedot.findIndex((tieto) => tieto.id === editTietoId);

  uudetTiedot[index] = editedTieto;

  setTiedot(uudetTiedot);
  setEditTietoId(null);
}

const handleEditClick = (event, tieto) => {
  event.preventDefault();
  setEditTietoId(tieto.id);

  const formValues = {
    id: tieto.id,
    enimi: tieto.enimi,
    snimi: tieto.snimi,
    ika: tieto.ika,
  }

  setEditFormData(formValues);
}

const handleCancelClick = () => {
  setEditTietoId(null);
}

const handleDeleteClick = (TietoId) => {
  const uudetTiedot = [...Tiedot];

  const index = Tiedot.findIndex((tieto) => tieto.id === TietoId);

  uudetTiedot.splice(index, 1);

  setTiedot(uudetTiedot);
}



  return (
    <div className="App">
      <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
        <tr>
          <th>Etunimi</th>
          <th>Sukunimi</th>
          <th>Ikä</th>
          <th>Toiminnot</th>
        </tr>
        </thead>
        <tbody>
          {Tiedot.map((tieto) => (
            <Fragment>
              {editTietoId === tieto.id ? (
            <EditableRow
            editFormData = {editFormData}
            handleEditFormChange={handleEditFormChange}
            handleCancelClick={handleCancelClick}
            />
          ) : (
            <ReadOnlyRow 
            tieto = {tieto} 
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            />
          )}
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <h2>Lisää Henkilö</h2>
      <form onSubmit = {handleAddFormSubmit}>
        <input type="text" 
        name="enimi" 
        placeholder="Etunimi" 
        onChange={handleAddFormChange}
        />
        <input type="text" 
        name="snimi" 
        placeholder="Sukunimi" 
        onChange={handleAddFormChange}
        />
        <input type="text" 
        name="ika" 
        placeholder="Ikä"
        onChange={handleAddFormChange}
        />
        <button type="submit" onSubmit={handleAddFormSubmit}>Lisää</button>
      </form>
      </div>
  );
}


export default App;
