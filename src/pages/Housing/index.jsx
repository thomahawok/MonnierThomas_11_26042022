import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailHousing from '../../components/DetailHousing';

function Housing () {
  const {id} = useParams();
  const [LogementData, setLogementData] = useState([]);

  useEffect(()=> {
    axios
    .get('../datas/data.json')
    .then((res)=> {
      setLogementData(res.data)
    })
  }, []);

  return (
    <section>
      {LogementData
      .filter(logement => logement.id.includes(id))
      .map((logement)=>(
        <DetailHousing key={logement.id} logement={logement}/> 
       ))}
    </section>
  );
};

export default Housing;