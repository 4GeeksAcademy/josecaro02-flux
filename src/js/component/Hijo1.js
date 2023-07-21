import React, {useContext} from 'react'
import { Context } from '../store/appContext'

const Hijo1 = () => {
    const {state, setState} = useContext(Context);
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>Componente Hijo1</div>
            <div className='col'><button className='btn btn-success' onClick={()=>{
                setState('Color verde')
            }}>Cambiar color</button></div>
        </div>
    </div>
  )
}

export default Hijo1