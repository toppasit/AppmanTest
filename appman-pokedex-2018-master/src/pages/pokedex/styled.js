import styled from 'styled-components'
import {colorList} from '../../constant/color'

export const DexContainer = styled.div`
  position: absolute;
  border: 1px solid red;
  width: 100%;
  background-color: ${colorList.modalOutside};
`

export const DexList = styled.div`
  margin: 2%;
  background-color: ${colorList.modalContentBackground};
`
