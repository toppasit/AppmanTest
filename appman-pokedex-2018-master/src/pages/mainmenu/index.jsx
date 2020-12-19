import React, { useState } from 'react'
import Cardpage from '../card'
import Dexpage from '../pokedex'

const mainpage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [add, setAdd] = useState(false)
  console.log('add: ', add)
  const headerfont = {
    font: "Gaegu"
  };
  return (
    <div>
      <h1 style={headerfont}>My Pokedex</h1>
      <p onClick={() => setAdd(!add)}>Click me!</p>
    </div>
  )
}

export default mainpage