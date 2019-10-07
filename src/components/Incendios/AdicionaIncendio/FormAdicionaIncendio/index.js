import React from 'react';

const FormAdicionaIncendio = ({ changeAdd, setLatitude, setLongitude, setSubmited }) => {

  const handleSubmit = event => {
    event.preventDefault();
    changeAdd();
    setSubmited(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          latitude:
          <input onChange={e => setLatitude(e.target.value)}></input>
        </label>
        <label>
          longitude:
          <input onChange={e => setLongitude(e.target.value)}></input>
        </label>
        <button type="submit">adicionar</button>
      </form>
    </div>
  );
}

export default FormAdicionaIncendio;