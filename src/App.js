
import axios from "axios";
import React, { useState } from 'react';

const App = () => {
 

  //get request
  const getdata=async()=>{
  const res=await axios.get("http://localhost:8080/call");
  document.getElementById("para").innerHTML=res.data;
  };
  //post request
  const data="Hello";
  const postdata=async()=>{
    const res=await axios.post("http://localhost:8080/post",{data});
    document.getElementById("para").innerHTML=res.data;
    };

    const [formdata,setFormData]=useState("a")

    
    const formdataf=async()=>{
      const res=await axios.post("http://localhost:8080/form",{formdata});
      document.getElementById("para").innerHTML=res.data;
      };
 return(
  <div class="App">
    <button onClick={getdata}>Getdata</button>
    <p id="para"></p>

    <button onClick={postdata}>Postdata</button>
    <p id="p"></p>
    <br>
    </br>
    <form onSubmit={formdataf}>
      <input type="text"
       name="formdata" 
       value={formdata}
       onChange={(e)=>setFormData(e.target.value)}></input>
      <input type="submit" value="form"></input>
    </form>




    </div>

    

 )

}


export default App ;
