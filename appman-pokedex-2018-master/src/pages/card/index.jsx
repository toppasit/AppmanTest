import React from 'react'
import _ from 'lodash'
import {CardContainer, Card} from './styled'

const card = () => {
  const arr = [9,7,5,4,6,8,7] //pokemon query will be here

  return (
    <CardContainer>
      {
        _.map(arr, v => 
          <Card>
            <p>{v}</p>
          </Card>)
      }
    </CardContainer>
  )
}

export default card