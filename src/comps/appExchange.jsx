import React, { useContext } from 'react'
import InputExchange from './inputExchange'
import ScoreExchange from './scoreExchange'
import TitleExchange from './titleExchange'
import { BsCurrencyBitcoin, BsCurrencyDollar, BsCurrencyEuro, BsArrowLeftRight } from "react-icons/bs";
import DateTime from './dateTime';
import { AppContext } from '../context/context';


export default function AppExchange() {

  const{value1, value2, setValue1, setValue2, input, options} = useContext(AppContext);


  return (
    <React.Fragment>
      <TitleExchange/>
      <div className='container-fluid shadow mt-3'>
        <div className="pt-3 ps-5">
      <DateTime/>
      </div>
      <div className='d-flex justify-content-evenly mt-2'>
    <InputExchange/>
    <BsArrowLeftRight onClick={()=>{setValue1(value2); setValue2(value1)}} className='mt-5 icon' cursor={'pointer'}/>
    <ScoreExchange/>
    </div>
    <h2 className='mt-2 text-center total'>{input.toLocaleString()} {value1.label} = {(input/value1.value*value2.value).toLocaleString()} {value2.label}</h2>
    <div className='mt-4 d-flex justify-content-evenly'>
    <BsCurrencyBitcoin className='icon'/>
    <BsCurrencyDollar className='icon'/>
    <BsCurrencyEuro className='icon'/>
    </div>
    <footer className='mt-3'>@Elias Areta</footer>
    </div>
    </React.Fragment>
  )
}
