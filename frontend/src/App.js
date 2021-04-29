import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [entitiesList, setEntitiesList] = useState([]);
  
  let list = 'data is loading';

  useEffect(() => {
    fetch('/api/demo/')
       .then(response => response.json())
       .then(data => { setEntitiesList(data);}); 
  }, []);


  list = entitiesList.map( i => (<div>{i.id}: {i.name}</div>));

  return (
    <div className="App">
      <h1>The content of the demo endpoint:</h1>
      { list }
    </div>
  );
}

export default App;

