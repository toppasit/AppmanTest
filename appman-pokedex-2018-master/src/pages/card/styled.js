import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
`

export const Card = styled.div`
  background-color: ${colorList.cardBackground};
  width: 49%;
  margin: 4px 0 8px;
  box-shadow: 0 0 5px ${colorList.cardBoxShadow};
  :hover {
    /* box-shadow: 0 0 5px #d5d6dc; */
  }
`
