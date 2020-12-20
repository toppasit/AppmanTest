import React from 'react'
import _ from 'lodash'
import {DexContainer, DexList} from './styled'

const pokedex = () => {
  const arr = [1,2,3,4];

  const dexContainer = {
    position: "absolute",
    border: "1px solid red",
    width: "100%",
    backgroundColor: "#000000a3"
  };

  const list = {
    margin: "2%",
    backgroundColor: "#ffffff"
  }

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