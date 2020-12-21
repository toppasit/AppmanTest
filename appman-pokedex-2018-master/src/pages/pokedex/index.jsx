/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react'
import _ from 'lodash'
import {DexContainer, DexBody, SearchBar, SearchInput, SearchIcon, ListContainer, EachPokemon, PokeInfo, PokeStat, PokeName, StatusContainer,
  EachStatus, Text, AddButtonContainer} from './styled'
import searchimg from '../../img/search.png'

const addToTeam = (card, myTeam, setMyTeam, pokeList, setPokeList) => {
  console.log(card)

  setPokeList(_.remove(pokeList, v => v !== card))
  
  if(_.isUndefined(myTeam)) setMyTeam([card.name])
  else setMyTeam(_.concat(myTeam, card.name))
}


const pokedex = ({add, setAdd, pokeList, setPokeList, myTeam, setMyTeam}) => {
  const [search, setSearch] = useState()
  console.log(search)
  console.log('myTeam', myTeam)

  // const newPokeList = _.map(pokeList, v => {
  //   if(_.isNaN(parseInt(v.hp))) v.hp = 0
  //   else if(parseInt(v.hp) > 100) v.hp = 100
  //   else v.hp = parseInt(v.hp)

  //   if(!_.isUndefined(v.attacks)) v = {...v, str: v.attacks.length * 50}
  //   else v = {...v, str: 0}

  //   if(!_.isUndefined(v.weaknesses)) v = {...v, weak: v.weaknesses.length * 100}
  //   else v = {...v, weak: 0}

  //   let dmgVal = 0
  //   if(_.isUndefined(v.attacks)) v = {...v, dmg: dmgVal}
  //   else {
  //     _.map(v.attacks, w => {
  //       if(w.damage === "") w.damage = 0
  //       dmgVal += parseInt(w.damage)
  //       v = {...v, dmg: dmgVal}
  //       return v
  //     })
  //   }

  //   v = {...v, happiness: parseInt(((v.hp / 10) + (v.dmg / 10) + 10) / 5)}
    
  //   return v
  // })

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
            _.map(pokeList, v => <EachPokemon>
              
              {
                // console.log(v.weaknesses)
                // console.log(v.name, 'HP: ', v.hp, ' STR: ', v.str, ' WKS: ', v.weak, ' DMG: ', v.dmg, ' HPY: ', v.happiness)
              }
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
              {/* <AddButtonContainer onClick={() => _.isUndefined(myTeam) ? setMyTeam([v.name]) : setMyTeam(_.concat(myTeam, v.name))}>Add</AddButtonContainer> */}
              <AddButtonContainer onClick={() => addToTeam(v, myTeam, setMyTeam, pokeList, setPokeList)}>Add</AddButtonContainer>
            </EachPokemon>)
          }
        </ListContainer>
      </DexBody>
    </DexContainer>
  )  
}

export default pokedex