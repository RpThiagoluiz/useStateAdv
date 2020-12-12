import React, {useState} from 'react'
import './global.css'

const AddInList = () => {
  const [state, setState] = useState ({
    total:2,
    langs:['python', 'go']
  })

  const addLang = () => setState ({
    total:state.langs.length + 1,
    langs: [...state.langs, 'JS']
  })

  return (
    <> 
      <button onClick={addLang}>Add</button>
      <div>{JSON.stringify(state)}</div>
    </>
    )
}



const HookState = () => {
  const [state, setState] = useState ({ 
    status: 'idle',
    loading:false, 
  })

  return (
    <> 
      <button onClick={ _ => setState({...state, loading:true})}>Add</button>
      <div>{JSON.stringify(state)}</div>
    </>
    )
}

/*
  <~~ Corrigir certo. ~~>
  * 
  * 
   

*/

class ClassState extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'idle',
      loading:false,
    }
  }
  render(){
    return(
      <> 
        <button onClick={ _ => this.setState({loading:true})}>Add(Class)</button>
        <div>{JSON.stringify(this.state)}</div>
      </>

    )
  }
  
  
}


const App  = () => {
  return(
    <> 
      <h1>Hello nightMare!</h1>
      
      <HookState />
      <small>O react ele nao faz um merge nos dados.</small>

      <ClassState />
      <small>Nota que ele mantem o status.</small>

      <AddInList />
      <small>Corrigido</small>
    </>
  )
}

export default App