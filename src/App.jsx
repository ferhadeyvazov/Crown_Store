import React, { useState, useEffect} from 'react';

import './App.css';
import Routes from './components/Routes/Routes';
import Header from './components/header/Header';

import { auth, createUserProfileDocument, db } from './Firebase/firebase.utils' 
import { collection, getDocs } from 'firebase/firestore';


function App() {
const [currentUser, setCurrentUser] = useState(null);
const [users, setUsers] = useState([]);

const data = collection(db, 'users');

useEffect(()=>{
  auth.onAuthStateChanged(async (user)=>{
    setCurrentUser(user);
    createUserProfileDocument(user);

    // =================================================================================================
      // READ THE DATA
    const datas = await getDocs(data);
    setUsers(datas.docs.map((doc)=>({...doc.data(), id: doc.id})));
  })
},[currentUser]);

console.log(users);
// Salam

return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes />
    </div>
);
}

export default App;
