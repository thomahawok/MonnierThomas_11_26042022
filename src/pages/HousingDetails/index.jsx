//import axios from 'axios'
import { getData } from '../../service/service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetailHousing from '../../components/DetailHousing'

/**
 * Presentation of the selected accommodation
 * @returns  {React.ReactElement} JSX.Element
 */

function HousingDetails() {
  const { id } = useParams()

  const [LogementData, setLogementData] = useState([])

  useEffect(() => {
    getData().then((data) => {
      setLogementData(data)
    })
  }, [])

  return (
    <section>
      {LogementData.filter((logement) => logement.id.includes(id)).map(
        (logement) => (
          <DetailHousing key={logement.id} logement={logement} />
        )
      )}
    </section>
  )
}

export default HousingDetails
