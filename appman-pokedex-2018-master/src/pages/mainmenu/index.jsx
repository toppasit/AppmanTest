/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import {MainContainer, HeadText, AddContainer, AddButton} from './styled'
import CardContainer from '../card'
import PokeDexContainer from '../pokedex'

const mainpage = () => {
  const [add, setAdd] = useState(false)
  const [pokeList, setPokeList] = useState([])
  const [myTeam, setMyTeam] = useState()
  
  useEffect(() => {
    fetch('http://localhost:3030/api/cards?limit=100')
      .then(res => res.json())
      .then((data) => {
        setPokeList(data.cards)
      })
      .catch(console.log)
  }, [])

  const newPokeList = _.map(pokeList, v => {
    if(_.isNaN(parseInt(v.hp))) v.hp = 0
    else if(parseInt(v.hp) > 100) v.hp = 100
    else v.hp = parseInt(v.hp)

    if(!_.isUndefined(v.attacks)) v = {...v, str: v.attacks.length * 50}
    else v = {...v, str: 0}

    if(!_.isUndefined(v.weaknesses)) v = {...v, weak: v.weaknesses.length * 100}
    else v = {...v, weak: 0}

    let dmgVal = 0
    if(_.isUndefined(v.attacks)) v = {...v, dmg: dmgVal}
    else {
      _.map(v.attacks, w => {
        if(w.damage === "") w.damage = 0
        dmgVal += parseInt(w.damage)
        v = {...v, dmg: dmgVal}
        return v
      })
    }

    v = {...v, happiness: parseInt(((v.hp / 10) + (v.dmg / 10) + 10) / 5)}
    
    return v
  })

  return (
    <MainContainer>
      <HeadText>My Pokedex</HeadText>
      <CardContainer myTeam={myTeam} setMyTeam={setMyTeam} pokeList={newPokeList} setPokeList={setPokeList}/>
      <AddContainer>
        <AddButton onClick={() => setAdd(true)}>+</AddButton>
      </AddContainer>
      {
        add && <PokeDexContainer add={add} setAdd={setAdd} pokeList={newPokeList} setPokeList={setPokeList} myTeam={myTeam} setMyTeam={setMyTeam}/> 
      }
    </MainContainer>
  )
}

export default mainpage