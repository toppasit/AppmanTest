/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import _ from 'lodash'
import {MainContainer, HeadText} from './styled'
import CardContainer from '../card'
import PokeDexContainer from '../pokedex'

const mainpage = () => {
  const [add, setAdd] = useState(false)
  console.log('add: ', add)

  return (
    <MainContainer>
      <HeadText>My Pokedex</HeadText>
      <CardContainer/>
      <p onClick={() => setAdd(!add)}>Click me!</p>
      {
        add && <PokeDexContainer/> 
      }
    </MainContainer>
  )
}

export default mainpage