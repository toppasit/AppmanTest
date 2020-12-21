import React from 'react'
import _ from 'lodash'
import {CardContainer, Card, PokeInfo, PokeStat, PokeName, StatusContainer,
  EachStatus, Text, RemoveButtonContainer} from './styled'

const removeFromTeam = (myPokemon, myTeam, setMyTeam, pokeList, setPokeList) => {
  setMyTeam(_.remove(myTeam, v => v !== myPokemon))
  setPokeList(_.concat(pokeList, myPokemon))
} 
  
const card = ({myTeam, setMyTeam, pokeList, setPokeList}) => {
  console.log(myTeam)
  return (
    <CardContainer>
      {
        !_.isUndefined(myTeam) && _.map(myTeam, v => 
          <Card>
            <PokeInfo>
            <img src={v.imageUrl} width="150px" height="200px"/>
              <PokeStat>
                <PokeName>{v.name}</PokeName>
                <StatusContainer>
                  <EachStatus><Text>hp</Text><Text>{v.hp}</Text></EachStatus>
                  <EachStatus><Text>str</Text><Text>{v.str}</Text></EachStatus>
                  <EachStatus><Text>weakness</Text><Text>{v.weak}</Text></EachStatus>
                  <EachStatus><Text>happy</Text><Text>{v.happiness}</Text></EachStatus>
                </StatusContainer>
              </PokeStat>
            </PokeInfo>
            <RemoveButtonContainer onClick={() => removeFromTeam(v, myTeam, setMyTeam, pokeList, setPokeList)}>X</RemoveButtonContainer>
          </Card>)
      }
    </CardContainer>
  )
}

export default card