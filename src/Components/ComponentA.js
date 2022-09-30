import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>ComponentA
      <div>
        <ComponentB/>
      </div>
    </div>
  )
}

export default ComponentA