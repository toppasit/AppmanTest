import React from 'react'
import _ from 'lodash'

const pokedex = () => {
  const arr = [1,2,3,4];

  const dexContainer = {
    position: "absolute",
    border: "1px solid red",
    width: "100%",
    backgroundColor: "#000000a3"
  };

  return (
    <div style={dexContainer}>
      <div>
      {
        _.map(arr, v => <div>{v}</div>)
      }
      </div>
    </div>
  )  
}

export default pokedex