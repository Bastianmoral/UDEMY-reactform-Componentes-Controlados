import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ 
    normal: 'por defecto', 
    texto: 'valor inicial', 
    select:'',  
    check: false,
    estado: 'feliz', 
  })
  
  const handleChange = ({target}) => { 
    console.log(target.type, target.checked)
    setValue((state) => ({
      ...state,
      [target.name]: target.type ===  'checkbox' 
        ? target.checked 
        : target.value
    }))
  }
  console.log(value)
  
  return(
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span> : null}
      <input type='text' name='normal' value={value.normal} onChange={handleChange} />
      <textarea name='texto' onChange={handleChange} value={value.texto}/>
      
      <select value={value.select} name='select' onChange={handleChange} >
        <option value=''> -- seleccione--  </option>
        <option value='chanchofeliz'> Chancho feliz  </option>
        <option value='chanchotriste'> Chancho triste </option>
        <option value='chanchitotriste'> Chanchito triste  </option>
        <option value='bastian'>  bastian  </option>
      </select>
      
      <input
        type='checkbox'
        name='check' 
        onChange={handleChange}
        chacked={value.check}
      />
      <div>
        <label>Chancho</label>
        <input
          onChange={handleChange}
          type= 'radio'
          value= 'feliz'
          name='estado'
          checked={value.estado === 'feliz'}
        /> Feliz
        <input
          onChange={handleChange}
          type= 'radio'
          value= 'triste'
          name='estado'
          checked={value.estado === 'triste'}

        /> Triste
        <input
          onChange={handleChange}
          type= 'radio'
          value= 'bastian'
          name='estado'
          checked={value.estado === 'bastian'}

        /> bastian
      </div>
    </div>
  )
}

export default App