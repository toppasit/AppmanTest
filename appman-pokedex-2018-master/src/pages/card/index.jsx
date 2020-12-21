import React from 'react'
import _ from 'lodash'
import {CardContainer, Card, PokeInfo, PokeStat, PokeName, LevelBar, LevelContent,
  EachStatus, RemoveButtonContainer} from './styled'
import happyimg from '../../img/cute.png'

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
            <RemoveButtonContainer onClick={() => removeFromTeam(v, myTeam, setMyTeam, pokeList, setPokeList)}>X</RemoveButtonContainer>
          </Card>)
      }
    </CardContainer>
  )
}

export default card