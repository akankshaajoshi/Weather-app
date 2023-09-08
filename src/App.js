import './App.css';
import { useState } from 'react';
import DisplayWeather from './DisplayWeather.js';

function App() {

  const API_KEY = "f521db22a5c524a26df21bf50ca6a172";
  const [weather, setWeather] = useState([])
  const [form, setForm] = useState({
    city: "",
    country: ""
  })

  const handleChange = (e) => {
    let name =  e.target.name
    let value = e.target.value

    if (name === 'city'){
      setForm({...form, city: value})
    } else{
      setForm({...form, country: value})
    }
  }

  const updateData = async (e) => {
    e.preventDefault();

    if (form.city === "" || form.country === ""){
      alert("Enter the name of a city and country")
    }
    else{
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`).then(
        (res) => (res.json())
      )
  
      setWeather({
        data: data
      });
    }
  }
  
  return (
    <div className="weather">
      <div className="title">Weather</div>
      <form>
        <input type="text" name="city" placeholder='city' onChange={e=>handleChange(e)}/>
        <input type="text" name="country" placeholder='country' onChange={e=>handleChange(e)}/>
        <button className='getWeather' onClick={(e)=>updateData(e)}>Get Weather</button>
      </form>
      <hr />
      {
        weather.data !== undefined? 
        <DisplayWeather data = {weather.data}/>:
        <h2>Data not found!</h2>
      }
    </div>
  );
}

export default App;
