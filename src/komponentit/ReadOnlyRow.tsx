import React from 'react';

const ReadOnlyRow = ( {tieto, handleEditClick, handleDeleteClick} ) => {
    return (
        <tr>
        <td>{tieto.enimi}</td>
        <td>{tieto.snimi}</td>
        <td>{tieto.ika}</td>
        <td>
            <button type="button" onClick={(event)=> handleEditClick(event, tieto)}>Muokkaa</button>
            <button type="button" onClick={ () => handleDeleteClick(tieto.id)}>Poista</button>
            </td> 
        </tr>
    )
}

export default ReadOnlyRow;