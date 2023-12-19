import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {useState} from 'react'

function App() {


 const [val,setval]=useState(0)




  return (
    <div>
    
    <div className='bg-danger'>

      <h2 className='text-center fs-2 text-white '>React Web</h2> 
      <div className='text-center fs-2'>{val}</div>
      <div className='d-flex justify-content-center'>
        <button  className='me-2'onClick={()=>{
          setval(val+1)
        }} >increment</button>
        <button onClick={()=>{
          setval(val-1)
        }} >Decrement</button>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='mt-3' onClick={()=>{
          setval(0)
        }}>Reset</button>

      </div>

    

    </div>
    </div>
  );
}

export default App;
