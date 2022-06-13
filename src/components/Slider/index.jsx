import React, { useState } from 'react'

function Slider ({allPictures}) {

    const [current, setCurrent] = useState(0);
    const length = allPictures.length;
  
    const nextSlide = () =>{
      setCurrent(current === length -1 ? 0 : current + 1)
    }
  
    const prevSlide = () =>{
      setCurrent(current === 0 ? length -1 : current - 1)
    }
  
    return (
      <section className="slider">
        {length > 1 && (
          <>
        <span className='slider__arrowLeft' onClick={prevSlide}>
          <svg width="35" height="55" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </svg>
        </span>
        <span  className='slider__arrowRight' onClick={nextSlide}>
          <svg width="35" height="55" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" fill="white"/>
          </svg>
        </span>
        </> ) }
          {allPictures.map((picture, index)=>(
            <div className={index} key={index}>
              {index === current && (<img src={picture} alt="intèrieur du logement" className="slider__img"/>)}
            </div>
        ))}
      </section>
    )
  }
  
  export default Slider