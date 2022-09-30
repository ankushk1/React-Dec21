import React, {useContext} from 'react'
import { messageContext } from '../App'


const ComponentB = () => {
  const text = useContext(messageContext)
  return (
    <div>ComponentB
      <br />
      {/* {
        <messageContext.Consumer>
          {
            (val) => (
              <p>{val}</p>
            )
          }

        </messageContext.Consumer>
      } */}
      <p>{text}</p>
    </div>
  )
}

export default ComponentB