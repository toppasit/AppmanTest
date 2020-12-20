import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const DexContainer = styled.div`
  position: absolute;
  /* border: 1px solid red; */
  width: 100%;
  background-color: ${colorList.modalOutside};
  height: inherit;
`

export const DexBody = styled.div`
  margin: 2%;
  background-color: ${colorList.modalContentBackground};
  height: 93%;
  padding: 8px 4px;
`

export const SearchBar = styled.div`
  box-shadow: 0 0 4px ${colorList.searchBoxBorder};
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