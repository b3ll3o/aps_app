import React, { useState } from 'react';
import axios from 'axios';

import ApresentationIncendio from './ApresentationIncendio';
import UpdateIncendio from './UpdateIncendio';

const Incendio = ({ incendio, setDeleteIncendio, setUpdateIncendio }) => {

  const [ update, setUpdate ] = useState(false);
  const [ latitude, setLatitude ] =  useState(0);
  const [ longitude, setLongitude ] = useState(0);
  
  async function handleClickDelete(){
    await axios.delete(process.env.REACT_APP_BASE_URL_DELETE + incendio._id);
    setDeleteIncendio(true);
  }

  async function handleClickUpdate(event){
    event.preventDefault();
    toggleUpdate();
    await axios.put(process.env.REACT_APP_BASE_URL_UPDATE + incendio._id, {
      latitude, longitude
    });
    setUpdateIncendio(true);
  }

  function toggleUpdate(){
    setUpdate(!update);
  }

  return (
    <div>
      { !update && <ApresentationIncendio 
        handleClickDelete={handleClickDelete} 
        toggleUpdate={toggleUpdate} 
        incendio={incendio}/>}
      { update && <UpdateIncendio 
        handleClickUpdate={handleClickUpdate} 
        incendio={incendio}
        setLatitude={setLatitude}
        setLongitude={setLongitude}/>}
    </div>
  );
}

export default Incendio;