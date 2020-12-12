import React, {useState} from 'react'
import './global.css'

const Bank = () => {
  const [state, setState] = useState (100)

  const add = () => 
    setTimeout(() => { 
      setState (state + 15)
  },2000)

  return (
    <> 
      <button onClick={add}>Depoisto: 15R$</button>
      <button onClick={() => setState(state - 100) }>Saque: 100R$</button>
      <h1>Saldo R$: {state}.00</h1>
    </>
    )
}
/*
  * Aqui q mora o perigo!
  * tomar cuidado quando existe esse problema no App, o useMemo resolve
  * setState pode receber um callback para resovler esse problema.
  * 

*/



const App  = () => {
  return(
    <> 
      <Bank />
    
    </>
  )
}

export default App