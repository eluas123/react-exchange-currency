import React, { useContext } from 'react'
import { AppContext } from '../context/context';
import Select from 'react-select';


export default function ScoreExchange() {

  const { value1,  value2,setValue1,setValue2, input,options} = useContext(AppContext);


  return (
    <div className='col-md-4 mt-3 mx-auto'>
      <h2>Choose Currency: </h2>
      <Select onChange={item=> setValue2(item)} value={value2} options={options}></Select>
    </div>
  )
}