import e from 'cors'
import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const DexContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${colorList.modalOutside};
  height: inherit;
`

export const DexBody = styled.div`
  margin: 2%;
  background-color: ${colorList.modalContentBackground};
  height: 93%;
  padding: 8px 4px;
  overflow: auto;
`

export const SearchBar = styled.div`
  box-shadow: 0 0 5px ${colorList.searchBoxBorder};
  display: flex;
  justify-content: space-between;
`

export const SearchInput = styled.input`
  border: none;
  font-family: Gaegu;
  width: 100%;
  font-size: 32px;
`

export const SearchIcon = styled.img`
  :hover {
    cursor: pointer;
  }
`

export const ListContainer = styled.div`
  padding: 8px;
`

export const EachPokemon = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${colorList.cardBackground};
  margin: 16px 0;
  padding: 8px;
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

export const AddButtonContainer = styled.div`
  border: 1px solid green;
  height: fit-content;
  margin: 0;
`