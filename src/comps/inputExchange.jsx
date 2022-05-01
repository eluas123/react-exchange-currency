import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import Select from 'react-select';
export default function InputExchange() {
  
  const { options, value1, setValue1, value2, setValue2, input,setInput} = useContext(AppContext);
  
  return (
    <div className='col-md-4 mt-3 mx-auto'>
            <h2>Choose Currency: </h2>
         <Select onChange={item => setValue1(item)} value={value1} options={options}></Select>
         <h2>Choose amount: </h2>
         <div className="col-md-6 mt-3">
           <input onChange={(e)=>{setInput(+e.target.value)}} className='form-control' type="number" defaultValue={input}></input>
         </div>         
    </div>
  )
}
