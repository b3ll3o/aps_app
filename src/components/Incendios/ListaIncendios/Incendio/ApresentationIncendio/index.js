import React from 'react';

const ApresentationIncendio = ({ incendio, handleClickDelete, toggleUpdate }) => {

  return (
    <div  key={incendio._id}>
      <span>{incendio.latitude.$numberDecimal}</span>
      <span>{incendio.longitude.$numberDecimal}</span>
      <button onClick={toggleUpdate}>editar</button>
      <button onClick={handleClickDelete}>deletar</button>
    </div>
  );
}

export default ApresentationIncendio;