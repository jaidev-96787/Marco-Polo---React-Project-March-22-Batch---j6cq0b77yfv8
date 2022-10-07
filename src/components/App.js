import React, { useState } from 'react';
import '../styles/App.css';
const App = () => {

  const [getMarco, setMarco] = useState('Marco');
  const [getPolo, setPolo] = useState('Polo');

  const onChangeHandler=()=>{
    if(getMarco == "Marco"){
      setMarco("Polo");
      setPolo("Marco");
    }
    else{
      setMarco("Macro");
      setPolo("Polo");
    }
  }
  
  return (
    <div id="main">
      <h1 id="marco-polo">{getMarco}</h1>
      <button onClick={onChangeHandler} id="marco-polo-toggler">{getPolo}</button>
    </div>
  )
}


export default App;
