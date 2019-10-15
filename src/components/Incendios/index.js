import React, { useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import axios from 'axios';

import ListaIncendios from './ListaIncendios';
import AdicionaIncendio from './AdicionaIncendio';

function Incendios(){
  
  const [ newIncendio, setNewIncendio ] = useState(false);
  const [ deleteIncendio, setDeleteIncendio ] = useState(false);
  const [ updateIncendio, setUpdateIncendio ] = useState(false);
  const [ data, setData ] = useState([]);

  async function fetchData(){
    const response = await axios.get(process.env.REACT_APP_BASE_URL_FIND_ALL);
    const json = await response.data;
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, [ newIncendio ]);

  useEffect(() => {
    fetchData();
    if(deleteIncendio) setDeleteIncendio(false);
  }, [ deleteIncendio ]);

  useEffect(() => {
    fetchData();
    if(updateIncendio) setUpdateIncendio(false);
  }, [ updateIncendio ]);  

  return (
    <Container>
      <AdicionaIncendio setNewIncendio={setNewIncendio}/>
      <ListaIncendios 
        data={data} 
        setDeleteIncendio={setDeleteIncendio}
        setUpdateIncendio={setUpdateIncendio}/>
    </Container>
  );
}

export default Incendios;