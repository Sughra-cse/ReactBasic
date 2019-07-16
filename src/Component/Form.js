import React from 'react';
import Image from "../Image.jpg";
 const Form=()=>{
     return(
         <div style={{backgroundColor:"grey",padding:"50px",margin:"50px",border:"10px",textAlign:"center"}}>
            <form>
                <h1 style={{color:"red"}}>Simple form</h1>
            <img src={Image} style={{width:"100px",height:"100px",borderRadius:"50px",borderColor:"red"}}alt="not found" /><br></br><br></br>
            <label>Name:  </label>
            <input type="text"/><br></br><br></br>
            <label>Age:    </label>
            <input type="number"/><br></br><br></br>
            <label>Address: </label>
            <input type="text"/><br></br>
            <label for="gender">Gender:</label> <br></br><br></br>
            Male:<input type="radio" name="gender"/>  
            Female:<input type="radio" name="gender"/><br></br><br></br>
            <label>DOB: </label>
            <input type="date"/><br></br><br></br>
            <button>submit</button>
            </form>
            </div>
     );

 };
 export default Form;