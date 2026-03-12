
import './App.css';
import { useState } from 'react';
import { Counter } from './Components/Counter';
import ApiCall from './Components/APICall';
import LoginModal from './Components/LoginModal';
import ApiData from './Components/ApiData';
import ParentComponent from './Components/ParentComponent';

function App() {
  const [openModal,setOpenModal]=useState(false)
  return (
    <div className="App">
      <Counter/>
      <ApiCall/>
      <ApiData/>
      <ParentComponent/>
      <button onClick={()=>setOpenModal(true)}>Click here to open modal</button>
      {
        openModal && <LoginModal setOpenModal={setOpenModal}/>
      }

    
     

      
    </div>
  );
}

export default App;
