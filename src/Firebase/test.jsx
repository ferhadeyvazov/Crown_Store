import {React, useEffect, useState} from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyBmT9RzPgWi9YRLuoCSKsKnvtNEx7ZlswY",
    authDomain: "crown-db-82ace.firebaseapp.com",
    projectId: "crown-db-82ace",
    storageBucket: "crown-db-82ace.appspot.com",
    messagingSenderId: "156178176844",
    appId: "1:156178176844:web:20f34c4eb8852fbf040de9",
    measurementId: "G-4D6MCPM5ZF"
}

const app = initializeApp(config);
const db = getFirestore(app);



const test = ()=> {
    const [users, setUsers]  =useState([]);
    useEffect(()=>{
        const getUsers = async ()=>{
            const docRef = await getDoc(collection(db, "users"));
            console.log(docRef);
        }
        getUsers();
    })
    return(
        <>
        
        </>
    )
}
export default test;