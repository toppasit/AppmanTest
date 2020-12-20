/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import _ from 'lodash'
import {MainContainer, HeadText, AddContainer} from './styled'
import CardContainer from '../card'
import PokeDexContainer from '../pokedex'

const mainpage = () => {
  const [add, setAdd] = useState(false)
  console.log('(mainpage) add: ', add)

  return (
    <MainContainer>
      <HeadText>My Pokedex</HeadText>
      {/* <p onClick={() => console.log(add)}>check state</p> */}
      <CardContainer/>
      <AddContainer>
        <p onClick={() => setAdd(true)}>Click me!</p>
      </AddContainer>
      {
        add && <PokeDexContainer add={add} setAdd={() => setAdd()}/> 
      }
    </MainContainer>
  )
}

export default mainpage