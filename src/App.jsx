import { useState, useEffect} from 'react';

import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/header/Header';

import { auth } from './Firebase/firebase.utils' 

function App() {
const [currentUser, setCurrentUser] = useState(null);

useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    setCurrentUser(user);
    console.log(user);
  })
},[currentUser]);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes />
    </div>
);
}

export default App;
