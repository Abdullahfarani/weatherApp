
import { useEffect, useState } from 'react';
import './App.css';
//import Logo from './components/Logo';

function App() {
  const [City, setCity] = useState("null");
  const [Search, setSearch] = useState("Karachi");

  useEffect(  () =>{
    const fetchApi = async () =>{
      const url=`http://api.openweathermap.org/geo/1.0/direct?q=${Search}&appid=41425e87d7bae47c68b90f0a0317a3ae`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson);
    }
    fetchApi();
  },[Search])

  return (
    <div className="box">
      <div className='box-writing'>   
      <input type="search" 
      className="input-class" 
      onChange={ (event) => { setSearch(event.target.value)}}></input>
      </div>

      {!City ? (
        <p> No Data found </p>
      ) : (

      <div>

      <i className="fa-solid logo-class fa-street-view" style={{color: "#6d3a17"}}></i>{Search}
      <h1 className='cityTemp'> {City} </h1>
      <div className='wave -one'></div>
      <div className='wave -two'></div>
      <div className='wave -three'></div> 
      </div>
      )}
    </div>
  );
}

export default App;
