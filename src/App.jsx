import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import React from 'react';





export const AppContext = React.createContext({})

function App() {
const [goods, setGoods] = useState([])



useEffect (()=>{
  async function axiosData(){
    const goodsData = await axios.get('https://642efc9e2b883abc641c00da.mockapi.io/tyrs')
   
    setGoods(goodsData.data)
   
  }
  axiosData();
},[])


  return (
    <div>

      <Router>
        <Header/>
          <Routes>

            
          
          <Route path='/'
              element={
                <Home
                  item={goods}
                />
              }
            />
              
        </Routes>
      </Router> 

      <Footer/>
    </div>
  );
}

export default App;


