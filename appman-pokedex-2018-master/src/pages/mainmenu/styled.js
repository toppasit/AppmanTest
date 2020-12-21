import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  height: inherit;
`

export const HeadText = styled.h1`
  font-family: Atma;
  font-weight: 700;
`

export const AddContainer = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 72px;
  background-color: ${colorList.bottomBarBackground};
  box-shadow: 0 0 5px ${colorList.bottomBarBoxShadow};
  display: flex;
  justify-content: center;
`

export const AddButton = styled.div`
  background-color: ${colorList.bottomBarBackground};
  width: 100px;
  color: ${colorList.bottomBarTextColor};
  font-size: 72px;
  position: absolute;
  bottom: 0%;
  text-align: center;
  border-radius: 50%;
  height: 120px;
  :hover {
    cursor: pointer;
  }
`
