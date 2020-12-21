/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import {MainContainer, HeadText, AddContainer} from './styled'
import CardContainer from '../card'
import PokeDexContainer from '../pokedex'

const mainpage = () => {
  const [add, setAdd] = useState(false)
  const [pokeList, setPokeList] = useState([])
  const [myTeam, setMyTeam] = useState([])
  console.log('add: ', add)
  
  useEffect(() => {
    fetch('http://localhost:3030/api/cards?limit=100')
      .then(res => res.json())
      .then((data) => {
        setPokeList(data.cards)
      })
      .catch(console.log)
  }, [])

  return (
    <MainContainer>
      <HeadText>My Pokedex</HeadText>
      {/* <p onClick={() => console.log(add)}>check state</p> */}
      <CardContainer myTeam={myTeam} setMyTeam={setMyTeam}/>
      <AddContainer>
        <p onClick={() => setAdd(true)}>Click me!</p>
      </AddContainer>
      {
        add && <PokeDexContainer add={add} setAdd={() => setAdd()} pokeList={pokeList}/> 
      }
    </MainContainer>
  )
}

export default mainpage