import React, {cloneElement} from "react"

const Familia2 = (props) => {

  return (
    <div>
      {/* {cloneElement(props.children, props)}  aqui pega apenas um elemento*/}
      {props.children.map((child, indice) => {
        return cloneElement(child, {...props, key: indice})
      })}
    </div>
  )
}

export default Familia2