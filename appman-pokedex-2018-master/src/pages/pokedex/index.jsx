import React from 'react'
import _ from 'lodash'
import {DexContainer, DexList} from './styled'

const pokedex = () => {
  const arr = [1,2,3,4];

  return (
    <DexContainer>
      <DexList>
        <div>search bar</div>
      {
        _.map(arr, v => <div>{v}</div>)
      }
      </DexList>
    </DexContainer>
  )  
}

export default pokedex