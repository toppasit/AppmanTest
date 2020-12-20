/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import _ from 'lodash'
import CardContainer from '../card'
import PokeDexContainer from '../pokedex'

const mainpage = () => {
  const [add, setAdd] = useState(false)
  console.log('add: ', add)

  const mainContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const headerfont = {
    font: "Gaegu"
  };

  return (
    <div style={mainContainer}>
      <h1 style={headerfont}>My Pokedex</h1>
      <CardContainer/>
      <p onClick={() => setAdd(!add)}>Click me!</p>
      {
        add && <PokeDexContainer/> 
      }
    </div>
  )
}

export default mainpage