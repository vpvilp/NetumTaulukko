import react from 'react'

const EditableRow = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return(
        <tr>
        <td>
            <input type="text" placeholder="Etunimi" name="enimi" defaultValue={editFormData.enimi} onChange={handleEditFormChange}>
            </input>
        </td>
        <td>
        <input type="text" placeholder="Sukunimi" name="snimi" defaultValue={editFormData.snimi} onChange={handleEditFormChange}>
            </input>    
        </td>    
        <td>
        <input type="text" placeholder="Ikä" name="ika" defaultValue={editFormData.ika} onChange={handleEditFormChange}>
            </input>
        </td>
        <td><button type="submit">Tallenna</button>
            <button type="button" onClick={handleCancelClick}>Peru</button>
        </td>        
        </tr>

    );
};

export default EditableRow;