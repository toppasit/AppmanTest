/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon} from './styled'
import searchimg from '../../img/search.png'

const pokedex = ({add, setAdd}) => {
  const [search, setSearch] = useState()
  const [pokeList, setPokeList] = useState([])
  console.log(search)
  console.log(pokeList)

  const arr = [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
  console.log('(dexpage) add = ', add, setAdd)

  useEffect(() => {
    fetch('http://localhost:3030/api/cards?limit=100')
    // fetch('http://localhost:3030/api/cards?limit=30&name=deox')
      .then(res => res.json())
      .then((data) => {
        setPokeList(data.cards)
        // console.log(data.cards[0])
      })
      .catch(console.log)
  }, [])

  // useEffect(() => {
  //   console.log('effect')
  // })

  return (
    <DexContainer onClick={() => setAdd(false)}>
    {/* <DexContainer> */}
      {/* <p onClick={() => console.log('Check => ', add, setAdd)}>wasd</p>
      <p onClick={() => setAdd(false)}>exit</p> */}
      <DexBody onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <SearchInput placeholder="Find Pokemon" onChange={e => setSearch(e.target.value)}/>
          <SearchIcon src={searchimg} width="50px" height="50px"/>
        </SearchBar>
        {
          _.map(pokeList, v => <div>{v.name}</div>)
        }
      </DexBody>
    </DexContainer>
  )  
}

export default pokedex