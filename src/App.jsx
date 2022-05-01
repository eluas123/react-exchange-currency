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
    let url = "/money.json";
    let resp = await fetch(url);
    let data = await resp.json();
    let tempObj = data.quotes;
    let temp_ar = [];
    for(let key in tempObj){
      temp_ar.push({
        label:key.slice(3),
        value:tempObj[key]
      })
    }
    console.log(temp_ar)
    setOptions(temp_ar);

    let usd = temp_ar[0];
    let ils = temp_ar[1];

    setValue1(usd);
    setValue2(ils);


  console.log(value1);
  console.log(value2);

  }

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
