/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon, ListContainer, EachPokemon, PokeInfo, PokeName, StatusContainer,
  EachStatus, HappinessContainer} from './styled'
import searchimg from '../../img/search.png'

const pokedex = ({add, setAdd, pokeList}) => {
  const [search, setSearch] = useState()
  console.log(search)

  console.log('props: ', add, setAdd, pokeList)

  const newPokeList = _.map(pokeList, v => {
    if(_.isNaN(parseFloat(v.hp))) v.hp = 0
    else if(parseFloat(v.hp) > 100) v.hp = 100

    if(!_.isUndefined(v.attacks) && v.attacks.length === 2) v = {...v, str: 100}
    else if(!_.isUndefined(v.attacks) && v.attacks.length === 1) v = {...v, str: 50}
    else v = {...v, str: 0}

    if(!_.isUndefined(v.weaknesses) && v.weaknesses.length === 1) v = {...v, weak: 100}
    else v = {...v, weak: 0}

    return v
  })

  return (
    <DexContainer onClick={() => setAdd(false)}>
      {/* <p onClick={() => console.log('Check => ', add, setAdd)}>wasd</p>
      <p onClick={() => setAdd(false)}>exit</p> */}
      <DexBody onClick={(e) => e.stopPropagation()}>
        <SearchBar>
          <SearchInput placeholder="Find Pokemon" onChange={e => setSearch(e.target.value)}/>
          <SearchIcon src={searchimg} width="50px" height="50px"/>
        </SearchBar>
        <ListContainer>
          {
            _.map(newPokeList, v => <EachPokemon>
              
              {console.log(v.attacks)}

              <img src={v.imageUrl} width="150px" height="200px"/>
              <PokeInfo>
                <PokeName>{v.name.toUpperCase()}</PokeName>
                <StatusContainer>
                  <EachStatus>
                    <h4>hp</h4>
                    <p>{v.hp}</p>
                  </EachStatus>
                  <EachStatus>
                    <p>str</p>
                    <p>{v.str}</p>
                  </EachStatus>
                  <EachStatus>
                    <p>weak</p>
                    <p>{v.weak}</p>
                  </EachStatus>
                </StatusContainer>
                <HappinessContainer>
                  <p>Happy</p>
                  <p>{((parseFloat(v.hp)/ 10) + (parseFloat(v.damage) / 10) + 10 - (v.weakness)) / 5}</p>
                </HappinessContainer>
              </PokeInfo>
            </EachPokemon>)
          }
        </ListContainer>
      </DexBody>
    </DexContainer>
  )  
}

export default pokedex