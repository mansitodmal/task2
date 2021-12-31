import React, { useEffect, useState } from "react";
import "./style.css";
import "../src/bootstrap/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);
  const [click, changeinclick ] = useState(false);

  useEffect(() =>
  {
     getdata();   
  } ,[]);

  const load = () =>
  {
    changeinclick(!click);
  }

  const getdata = async () =>
  {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const content = await response.json();
      setUsers(content.data);
  }

  return (
    <div className="App">
      <nav className="main-nav">
      <div className="logo">
      <h2>
            <span>L</span>ET'S 
            <span>G</span>ROW
            <span>M</span>ORE
            </h2>
      <button className="btn1" onClick={load}>Get  User </button>
      </div>
      </nav>
      <section>
      <div className="hero-section">
      <div className="logo">
         <h1><span>L</span>ET'S 
            <span>G</span>ROW
            <span>M</span>ORE</h1>
           </div>
           </div>
      </section>
      
      {click && (
        
          
            
         
       <div className='menu-items container-fluid mt-5'>
         
           
         
           <div className='row'>
             <div className='col-ll mx-auto'>
               <div className='row my-5'>
               {users.map((users) => (
            <div className="" key={users.id}>
               <div className="item1 col-12 col-md-6 col-lg-6 col-x1-4 my-5 mx-5"> 
                            <div className="row Item-inside">
                                     
               <img src={users.avatar} alt="" className="img-fluid"></img>
               
               <div className= "main-title pt-4 pb-3">
               <h3>Name : {users.first_name}{users.last_name}</h3>
               <h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></h5>               </div></div>
               </div>
               </div>
             ))}
               </div>
             </div>
           </div>
      
       </div>


       

      )}    
    </div>
    
  );
}
export default App;