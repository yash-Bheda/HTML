import './App.css';
import {BrowserRouter,Link,Route,Routes} from "react-router-dom"
// import Home from './Home';
// import About from './About';
// import Errpage from './Errpage';
import React, { lazy } from 'react';


const Home=React.lazy(()=>import('./Home'))
const About=React.lazy(()=>import('./About'))
const Errpage=React.lazy(()=>import('./Errpage'))

function App() {
  return (
    <div className="App">


<Link to="/">Home</Link> {" "}
<Link to="/ab">About</Link>{" "}
<Link to="/err">Err</Link>

      

  
     
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<>...Home</>}>
            <Home/>

          </React.Suspense>
        }></Route>
        <Route path='/ab' element={
            <React.Suspense fallback={<>...About</>}>
              <About/>

            </React.Suspense>
        }></Route>
        <Route path='/err' element={
            <React.Suspense fallback={<>...Err</>}>
              <Errpage/>

            </React.Suspense>
          }></Route>
      </Routes>
      
    
    </div>
  );
}

export default App;
