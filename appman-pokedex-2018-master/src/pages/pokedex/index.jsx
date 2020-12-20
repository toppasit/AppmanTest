/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon} from './styled'
import searchimg from '../../img/search.png'

const pokedex = ({add, setAdd}) => {
  const [search, setSearch] = useState()
  console.log(search)

  const arr = [1,2,3,4]
  console.log('(dexpage) add = ', add, setAdd)

  return (
    <DexContainer onClick={() => setAdd(false)}>
    {/* <DexContainer> */}
      {/* <p onClick={() => console.log('Check => ', add, setAdd)}>wasd</p>
      <p onClick={() => setAdd(false)}>exit</p> */}
      <DexBody onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <SearchInput placeholder="Find Pokemon" onChange={e => console.log(e.target.value)}/>
          <SearchIcon src={searchimg} width="50px" height="50px"/>
        </SearchBar>
        {
          _.map(arr, v => <div>{v}</div>)
        }
      </DexBody>
    </DexContainer>
  )  
}

export default pokedex