import React from 'react';

const UpdateIncendio = ({ handleClickUpdate, incendio, setLatitude, setLongitude  }) => {

  return (
    <div>
      <form onSubmit={handleClickUpdate}>
        <label>
          latitude:
          <input 
            placeholder={incendio.latitude.$numberDecimal}
            onChange={e => setLatitude(e.target.value)}></input>
        </label>
        <label>
          longitude:
          <input 
            placeholder={incendio.longitude.$numberDecimal}
            onChange={e => setLongitude(e.target.value)}></input>
        </label>
        <button type="submit">editar</button>
      </form>
    </div>
  );
}

export default UpdateIncendio;