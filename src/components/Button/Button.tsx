import { useEffect, useState } from "react"
import { withLogic } from "../HOC/WithLogic"

const Button = (props: any) => {
  return <button>Mi boton de {props.nameButton}</button> 
}

export default withLogic(Button)

