import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import logo from "./logo.png";
import back from "./back.jpg"
import home from './home.css'
import db from './db.json'





function Home() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src={logo} className='log'/>
    <a className="navbar-brand fs-3 text-success" href="#">Nest
    
    </a>
    <form class="d-flex ms-5">
        <input className="form-control me-2 ps-1 serachinp" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle border" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            your location
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li>
          <div className='ms-5 fs-5'>
        <i class="fa-solid fa-code-compare"></i>compare
        <i class="fa-solid fa-cart-shopping ms-2"></i> cart
        <i class="fa-solid fa-file-invoice ms-2"></i> Account


          </div>
        </li>
      
      </ul>
    
     
    </div>
  </div>
</nav>
<div >
  <ul className='d-flex list- inline fs-5 list-unstyled ms-5 text-center p-3' >
    <li className='ms-3'><button className='bg-success border-none'> <a>BROESER ALL CATAGROIES</a></button></li>
    <li className='ms-3 text-success'>Home</li>
    <li className='ms-3'>About</li>
    <li className='ms-3'>shop</li>
    <li className='ms-3'>vendors</li>
    <li className='ms-3'>menu</li>
    <li className='ms-3'>Blog</li>
    <li className='ms-3'>Pages</li>
    <li className='ms-3'>contact</li>
    <li className='ms-5 ps-5'>

    <i class="fa-solid fa-headphones ms-2"></i>

    </li>
    <li >

      <div >
        <div >
          
           <span className='text-success'>1900-888</span></div>
        <div>24*7 call center</div>
      </div>
    </li>
  </ul>
</div>
<div className='back'>

   <div className=' p-5 fs-1'>Don't miss amezing<h1>grocery deals</h1>  </div>
   <h5 className='ps-5'>sign for the daily newsletter</h5>

   <div className='ps-5  '>
    <input type='text' className=' border-1 rounded-pill p-2  text-center' placeholder='your mail'>
    </input>
    <button className='rounded-pill p-2 ps-3 text-center bg-success border-0  '>suscribe</button>

   </div>
      
    </div>

    <h3>featured categories</h3>

    <div className='container d-flex inline '>
      {
        db.map((item,key)=>
        {

          // console.log(item.img)
          return(
            <div className='cart 'key={key} >
              <img src ={ item.img} />
          <div className='m-2'>{item.info1}</div>
          <div className='m-2'>{item.info2}</div>
          </div>)
          

        })
      }
      

    </div>
    </div>


)
    
  
}

export default Home