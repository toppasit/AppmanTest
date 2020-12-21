/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon, ListContainer, EachPokemon, PokeInfo, PokeStat, PokeName,
  EachStatus, AddButtonContainer, LevelBar, LevelContent, SearchSelect} from './styled'
import searchimg from '../../img/search.png'
import happyimg from '../../img/cute.png'

const addToTeam = (card, myTeam, setMyTeam, pokeList, setPokeList) => {
  console.log(card)

  setPokeList(_.remove(pokeList, v => v !== card))
  
  if(_.isUndefined(myTeam)) setMyTeam([card])
  else setMyTeam(_.concat(myTeam, card))
}

const pokedex = ({setAdd, pokeList, setPokeList, myTeam, setMyTeam}) => {
  const [search, setSearch] = useState('')
  const [searchType, setSearchType] = useState('name')
  let typeList = []
  typeList = _.map(pokeList, v => _.union(typeList, v.type))

  pokeList = _.map(pokeList, v => {

    typeList = _.union(typeList, v.type)

    if(searchType === "name") {
      if(_.includes(v.name.toLowerCase(), search.toLowerCase())) {
        return v
      }
    } else {
      if(_.includes(v.type.toLowerCase(), search.toLowerCase())) {
        return v
      }
    }
  })

  console.log(typeList)
  console.log(pokeList)

  return (
    <DexContainer onClick={() => setAdd(false)}>
      <DexBody onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <SearchInput placeholder="Find Pokemon" onChange={e => setSearch(e.target.value)}/>
          <SearchIcon src={searchimg} width="50px" height="50px"/>
        </SearchBar>
        Search by:
        <SearchSelect id="select" onChange={e => setSearchType(e.target.value)}>
          <option id="name" value="name">Name</option>
          <option id="type" value="type">Type</option>
        </SearchSelect>
        <ListContainer>
          {
            _.map(pokeList, v => !_.isUndefined(v) && <EachPokemon>
              <PokeInfo>
                <img src={v.imageUrl} width="150px" height="200px"/>
                <PokeStat>
                  <PokeName>{v.name.toUpperCase()}</PokeName>
                  <div>
                    <EachStatus justifyContent="space-between">
                      <div>HP</div>
                      <LevelBar>
                        <LevelContent width={`${v.hp}%`}> </LevelContent>
                      </LevelBar>
                    </EachStatus>
                    <EachStatus justifyContent="space-between">
                      <div>STR</div>
                      <LevelBar>
                        <LevelContent width={`${v.str}%`}></LevelContent>
                      </LevelBar>
                    </EachStatus>
                    <EachStatus justifyContent="space-between">
                      <div>WEAK</div>
                      <LevelBar>
                        <LevelContent width={`${v.weak}%`}></LevelContent>
                      </LevelBar>
                    </EachStatus>
                    <EachStatus>
                      {
                        _.map(_.range(v.happiness), v => <img src={happyimg} width="50px" height="50px"/>)
                      }
                    </EachStatus>
                  </div>
                </PokeStat>
              </PokeInfo>
              <AddButtonContainer onClick={() => addToTeam(v, myTeam, setMyTeam, pokeList, setPokeList)}>Add</AddButtonContainer>
            </EachPokemon>)
          }
        </ListContainer>
      </DexBody>
    </DexContainer>
  )  
}

export default pokedex