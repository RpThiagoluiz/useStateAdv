import React, {useState} from 'react'
import './global.css'


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
  <~~ Para corrigir o erro do arquivo 1 ~~>
  * muitas vezes fazem isso
  * isso errado q ele pode da um erro futuramente nos dados.
   

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
    </>
  )
}

export default App