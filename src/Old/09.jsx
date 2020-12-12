import React, {useState} from 'react'
import './global.css'




const AddInList = () => {
  //nao chamar ela mais de uma vez. Ajuda no Processamento.Estado sincrono
  const [state, setState] = useState (() => ({
    total:2,
    langs:['python', 'go']
  }))

  const addLang = () => 
    setTimeout(() => { 
      setState ((prevState) => ({
        total:prevState.langs.length + 1,
        langs: [...prevState.langs, 'JS']
    }))
  },2000)

  return (
    <> 
      <button onClick={addLang}>Add</button>
      <button onClick={() => setState({ total:0, langs: [] })}>Clear</button>
      <div>{JSON.stringify(state)}</div>
    </>
    )
}

/*
  useEffect - faz async
*/


const App  = () => {
  return(
    <>

      <AddInList />
      <small>Corrigido</small>
    </>
  )
}

export default App