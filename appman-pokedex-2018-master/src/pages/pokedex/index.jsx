import React from 'react'
import cardpage from '../card'
import _ from 'lodash'

const dex = () => {
  const arr = [1,2,3,4];
  return (
    <div>
      {
        _.map(arr, v => <div>{v}</div>)
      }
    </div>
  )  
}

// const list = () => {

// }

export default dex