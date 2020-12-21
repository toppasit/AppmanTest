/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon, ListContainer, EachPokemon, PokeInfo, PokeStat, PokeName, StatusContainer,
  EachStatus, Text, AddButtonContainer} from './styled'
import searchimg from '../../img/search.png'

const addToTeam = (card, myTeam, setMyTeam, pokeList, setPokeList) => {
  console.log(card)

  setPokeList(_.remove(pokeList, v => v !== card))
  
  if(_.isUndefined(myTeam)) setMyTeam([card])
  else setMyTeam(_.concat(myTeam, card))
}

const pokedex = ({add, setAdd, pokeList, setPokeList, myTeam, setMyTeam}) => {
  const [search, setSearch] = useState()

  return (
    <DexContainer onClick={() => setAdd(false)}>
      <DexBody onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <SearchInput placeholder="Find Pokemon" onChange={e => setSearch(e.target.value)}/>
          <SearchIcon src={searchimg} width="50px" height="50px"/>
        </SearchBar>
        <ListContainer>
          {
            _.map(pokeList, v => <EachPokemon>
              <PokeInfo>
                <img src={v.imageUrl} width="150px" height="200px"/>
                <PokeStat>
                  <PokeName>{v.name.toUpperCase()}</PokeName>
                  <StatusContainer>
                    <EachStatus>
                      <Text>hp</Text>
                      <Text>{v.hp}</Text>
                    </EachStatus>
                    <EachStatus>
                      <Text>str</Text>
                      <Text>{v.str}</Text>
                    </EachStatus>
                    <EachStatus>
                      <Text>weak</Text>
                      <Text>{v.weak}</Text>
                    </EachStatus>
                    <EachStatus>
                      <Text>Happy</Text>
                      <Text>{v.happiness}</Text>
                    </EachStatus>
                  </StatusContainer>
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