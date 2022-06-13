//import React, { useState } from 'react';
import Slider from '../../components/Slider';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';

function DetailHousing ({logement}) {
 
  return (
    <article className='article'>
      
      <Slider allPictures={logement.pictures}/>

      <div className="article article__desktop">
          <h1 className="article__title">{logement.title}</h1>
          <p className="article__location">{logement.location}</p>
          <div className="article__tags">
            {logement.tags.map((tag) => (
              <Tag name={tag} key={tag} />
            ))}
        </div>

        <div className="article__profile">
            <Rating count={logement.rating} />
          <div className="article__host">
            <h3>{logement.host.name.replace(" ", "\n")}</h3>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>

      <div className="article__details">
        <div className='col description'>
          <Collapse title='Description' content={logement.description}/>
        </div>
        <div className='col eq' >
          <Collapse title='Equipements' content={logement.equipments}/>
        </div>
      </div>
    </article>
  );
}

export default DetailHousing;
