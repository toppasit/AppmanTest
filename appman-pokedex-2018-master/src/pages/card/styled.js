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
  margin: 4px;
  padding: 4px;
  box-shadow: 0 0 5px ${colorList.cardBoxShadow};
  :hover {
    box-shadow: 0 0 5px ${colorList.cardBoxShadowHover};
  }
`

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: row;
`

export const PokeStat = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 16px;
  border: 1px solid black;
`

export const PokeName = styled.h2`
  font-family: Gaegu;
  font-weight: lighter;
  margin: 8px 0 0 0;
`

export const StatusContainer = styled.div`
  border: 1px solid red;
`

export const EachStatus = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid blue;
`

export const Text = styled.p`
  margin: 0;
`

export const StatusBar = styled.div`
`

export const RemoveButtonContainer = styled.div`
  border: 1px solid green;
  height: fit-content;
  margin: 0;
  color: ${colorList.colorAddButton};
  :hover {
    cursor: pointer;
  }
`