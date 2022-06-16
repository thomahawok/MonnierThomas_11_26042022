import React, { useState } from 'react'

/**
 * Collapse card
 * @param {Object}          props
 * @param {String}          props.title
 * @param {String | Array}  props.content
 * @returns  {React.ReactElement} JSX.Element
 */

function Collapse(props) {
  const [show, setShow] = useState(false)
  const isArray = Array.isArray(props.content)

  return (
    <>
      <div className="collapse">
        <div
          className={show ? 'collapse__title true' : 'collapse__title false'}
          onClick={() => setShow(!show)}
        >
          <p>{props.title}</p>
        </div>
        <div
          className={
            show
              ? 'collapse__describle collapse__describle__show'
              : 'collapse__describle collapse__describle__hide'
          }
        >
          {isArray ? (
            <ul>
              {props.content.map((prop, index) => (
                <li key={index}>{prop}</li>
              ))}
            </ul>
          ) : (
            <p>{props.content}</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Collapse
