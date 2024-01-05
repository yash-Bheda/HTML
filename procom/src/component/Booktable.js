import React, { useState } from 'react'
// import { Navbar } from 'react-bootstrap'
// import { Navbar } from 'react-bootstrap'
import Navbar from '../component/Navbar'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bookta from '../img/booktable.jpg'


function Booktable() {

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div>
      <div className='booktable'>
        <Navbar/>
       
        </div>
        <div className='container mt-5'>
          <div className='col-lg-12 row'>
            <div className='col-lg-6'>

              <div className='p-2'>
                <p className='fs-1' style={{fontFamily:"cursive"}}>Book A Table </p>
              </div>
              <div className='m-2' >
                <input className='p-1' placeholder='Your Name' style={{height:"40px",width:"100%"}}/>
              </div>
              <div className='m-2'>
                <input placeholder='Phone Number' style={{height:"40px",width:"100%"}}/>
              </div>
              <div className='m-2'>
                <input placeholder='Your Email' style={{height:"40px",width:"100%"}}/>
              </div>
              <div className='m-2'>
              <input placeholder='How Many Persons' style={{height:"40px",width:"100%"}}/>

                
              </div>

              <div style={{height:"30px",width:"100%"}}>
                <p className='ms-2 fs-5'>Please Select Date</p>
                <i class="fa-solid fa-calendar-days"></i>

                
              <DatePicker className='ms-2'
        selected={selectedDate} 
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // You can customize the date format
      />
       <div className='mt-2'>
                <button className='m-2 border-0 bg-success' style={{height:"40px", width:"160px"}}>Book Now</button>
              </div>

                
              </div>
            

            </div>
           
            <div className='col-lg-6'>
            <img src={bookta} style={{height:"100%" ,width:"100%"}}/>
            </div>

          </div>
        </div>
   
     
       
       
       

    </div>
  )
}

export default Booktable