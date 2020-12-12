import React, {useState} from 'react'
import './global.css'

const initialState = () => ({
  total:2,
  langs:['python', 'go']
})


const AddInList = () => {
  const [state, setState] = useState ((initialState()))

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



const App  = () => {
  return(
    <>

      <AddInList />
      <small>Corrigido</small>
    </>
  )
}

export default App