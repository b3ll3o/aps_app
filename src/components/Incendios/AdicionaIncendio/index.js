import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BtnAdiciona from './BtnAdiciona';
import FormAdicionaIncendio from './FormAdicionaIncendio';

const AdicionaIncendio = ({ setNewIncendio }) => {

  const [ latitude, setLatitude ] = useState(0);
  const [ longitude, setLongitude ] = useState(0);
  const [ add, setAdd ] =  useState(false);
  const [ submited, setSubmited ] = useState(false);

  async function postData() {
    const response = await axios.post(process.env.REACT_APP_BASE_URL_ADD, { latitude, longitude });
    const json = await response.data;
    setNewIncendio(json);
  }

  useEffect(() => {
    if(submited){
      postData();
      setSubmited(false);
    }
  }, [ submited ]);

  const changeAdd = () => {
    setAdd(!add);
  }

  return (
    <div>
      { !add && <BtnAdiciona changeAdd={changeAdd}/>}
      {add && <FormAdicionaIncendio 
        changeAdd={changeAdd}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        setSubmited={setSubmited}/>}
    </div>
  );
}

export default AdicionaIncendio;