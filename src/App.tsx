import { useState } from 'react';
import './App.css';
import Launch from './Components/Launch';
import LaunchDetails from './Components/LaunchDetails';
import { MyGlobalContext } from './Components/Store/Context';
function App() {
  let [Id,setId] = useState<string>('1')
  return (

    <div className="App">
      <MyGlobalContext.Provider value={{Id, setId}}>
      <Launch />
      <LaunchDetails /> 
      </MyGlobalContext.Provider>
      
      
    </div>
  );
}

export default App;
