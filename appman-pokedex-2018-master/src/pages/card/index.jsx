import React from 'react'
import _ from 'lodash'

const card = () => {
  const arr = [9,7,5,4,6,8,7,5] //pokemon query will be here

  const cardContainer = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%"
  };

  const pokeCard = {
    backgroundColor: "#f3f4f7",
    width: "49%",
    margin: "2px",
  };

  return (
    <div style={cardContainer}>
    {
      _.map(arr, v => 
        <div style={pokeCard}>
          <p>{v}</p>
        </div>)
    }
    </div>
  )
}

export default card