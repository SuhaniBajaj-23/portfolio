import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App(){
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar/>
            <Landing/>
          </>
        }
        ></Route>
      </Routes>

      {/* <Routes>
        <Route path="/slide" element={<SlideBar/>}></Route>
      </Routes> */}
    </>
  );
}

export default App;