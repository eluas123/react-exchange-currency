import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AppExchange from './comps/appExchange';
import { AppContext } from './context/context';


function App(props) {

  const [options, setOptions] = useState([]);
  const [value1,setValue1] = useState({});
  const[value2,setValue2] = useState({});
  const[input,setInput] = useState(1); 
  
  useEffect(()=>{
    doApi();
  },[])


  const doApi = async() =>{
    let url = 'https://api.currencyapi.com/v2/latest?apikey=f2dce500-45f0-11ec-9860-7954a32a920b';
    let resp = await axios.get(url);
    let currencys = resp.data;
    let temp_ar = [];
    for(const key in currencys.data){
      temp_ar.push({
        label:key,
        value:currencys.data[key],
      })
    }
    console.log("data",temp_ar)
    setOptions(temp_ar);
    let USD = temp_ar[157];
    let ILS = temp_ar[69];
    setValue1(USD);
    setValue2(ILS);
  }
  console.log("dolla",value1);
  console.log("shekel",value2);
  return (
    <div className="container">
      <AppContext.Provider value={{
        options, value1, setValue1, value2, setValue2, input,setInput
      }}>
      <AppExchange/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
