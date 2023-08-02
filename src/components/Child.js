
import React from 'react'

function Child({obj}) {


  return (
    <div className='child'>
        <h1>Child Component</h1>
        <input type='text' onChange={(event)=>obj.setData(event.target.value)} value={obj.data} />
    </div>
  )
}

export default Child