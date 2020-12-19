import React from 'react'
// import pokeInfo from '../../../mock/cards.json'

const cardpage = () => {
  // console.log(pokeInfo);
  const pokeCard = {
    border: "1px solid red",
    padding: "4px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div style={pokeCard}>
      <p>card</p>
    </div>
  )
}

export default cardpage