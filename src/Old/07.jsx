import React, {useState} from 'react'
import './global.css'

const Bank = () => {
  const [state, setState] = useState (100)

  const add = () => 
    setTimeout(() => { 
      setState ((prevState) => prevState + 15) //callback que sempre vem com a ultima versao.
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
  * Elimina o problema do rescondidion.

*/


const App  = () => {
  return(
    <> 
      <Bank />
    
    </>
  )
}

export default App