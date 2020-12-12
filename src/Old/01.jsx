import React, {useState} from 'react'
import './global.css'


const HookState = () => {
  const [state, setState] = useState ({ 
    status: 'idle',
    loading:false, 
  })

  return (
    <> 
      <button onClick={ _ => setState({loading:true})}>Add</button>
      <div>{JSON.stringify(state)}</div>
    </>
    )
}

/*
  <~~ MSM COISA DO USE STATE, assim q ele funciona ~~>
  * const meuEstado = useState ({loading:false})
  * meuEstado[1] ()
  * return <div>{JSON.stringify(meuEstado[0])}</div> 

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