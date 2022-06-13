import React, { useState } from 'react'

function Collapse (props) {
  const [show, setShow] = useState(false)
  const isArray = Array.isArray(props.content)
  console.log(props)
  console.log(props.content)
  console.log(props.title)

  return (
   <>
      <div className='collapse' >
          <div  className={show ? 'collapse__title true' : 'collapse__title false'} onClick={() => setShow(!show)}>
            <p>{props.title}</p>
          </div>   
          <div className={show ? 'collapse__describle collapse__describle__show' : 'collapse__describle collapse__describle__hide'}>
            { isArray ? 
              <ul> {props.content.map((prop, index) =>
                <li key={index}>{prop}</li>)}
              </ul> 
              : <p>{props.content}</p>
            }
          </div>
      </div>
  </>
  )
}

export default Collapse