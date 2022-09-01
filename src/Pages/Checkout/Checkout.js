import React from "react";
import "./Checkout.css";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



const Checkout = () => {
  const handleSubmit = () =>{
    alert("Thank's for your booking");
  }

  
  return (
    <div className="App px-4" style={{ height: "2000px" }}>
      <h1 className="mt-8 text-gray-500 uppercase bold text-2xl">
        Please checkout your booking
      </h1>
      <h2 className="mb-12 text-danger">Start editing to see some magic happen!</h2>
      <div className="container w-50 mx-auto mt-4">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Where to" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control mt-1" id="exampleFormControlInput1" placeholder="When" />
        </div>
        
        <div className="form-group text-danger">
          <label for="exampleFormControlSelect1">Type</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Adventure</option>
            <option>Wildlife</option>
            <option>Sightseeing</option>
          </select>
          <input className="w-100 mt-1 form-control" type='date'></input>
          <label for="exampleFormControlSelect1">Choose Ticket</label>
          <select className="form-control" id="exampleFormControlSelect1" >
            <option>Adventure</option>
            <option>Wildlife</option>
            <option>Sightseeing</option>
          </select>
        </div>
        <button className="btn btn-danger w-50 mx-auto d-block " onClick={()=>handleSubmit()} >Submit</button>
      </div>
    </div>
  );
};


export default Checkout;

