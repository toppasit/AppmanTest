import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
`

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorList.cardBackground};
  width: 48%;
  margin: 12px 6px;
  padding: 4px;
  box-shadow: 0 0 5px ${colorList.cardBoxShadow};
  :hover {
    box-shadow: 0 0 5px ${colorList.cardBoxShadowHover};
    div {
      visibility: visible;
    }
  }
`

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const PokeStat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 16px;
  width: 60%;
`

export const PokeName = styled.h2`
  font-family: Gaegu;
  font-weight: lighter;
  margin: 8px 0 0 0;
`

export const LevelBar = styled.div`
  background-color: ${colorList.levelTubeBackground};
  box-shadow: 0 0 5px ${colorList.levelTubeBoxShadow};
  border-radius: 15px;
  width: 80%;
`

export const LevelContent = styled.div`
  background-color: ${colorList.levelTubeValueBackground};
  border-radius: 15px;
  padding: 13px 0;
  width: ${props => props.width};
`

export const EachStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin: 8px 0;
`

export const Text = styled.p`
  margin: 0;
`

export const RemoveButtonContainer = styled.div`
  height: fit-content;
  margin: 0;
  color: ${colorList.colorAddButton};
  :hover {
    cursor: pointer;
  }
  font-size: 24px;
  visibility: hidden;
`