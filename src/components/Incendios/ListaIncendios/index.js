import React, { useState, useEffect } from 'react';

import Incendio from './Incendio';

const ListaIncendios = ({ data, setDeleteIncendio, setUpdateIncendio }) => {

  const [ incendios, setIncendios ] = useState([]);

  useEffect(() => {
    setIncendios(data);
  }, [ data ])

  return (
    <div>
      {incendios && incendios.map(incendio => <Incendio 
        incendio={incendio} 
        setDeleteIncendio={setDeleteIncendio}
        setUpdateIncendio={setUpdateIncendio}/>)}
    </div>
  );
}

export default ListaIncendios;