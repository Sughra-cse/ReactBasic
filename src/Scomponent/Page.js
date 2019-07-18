import React from 'react' ;
import Dillonshook from "../Dillonshook.jpg";

const Page = () => {
    return (
        <div>
            <form>
                <center>
                <fieldset >
        <img src={Dillonshook} style={{width:"100px", height:"100px",position:"absolute",left:"250px" }}alt="not found"/> 
        <h2> Dillonshook</h2>
    <p stlye={{fontSize:"250px",zIndex:"100",fontWeight:"bold"}}>giving the description abt image</p>
        </fieldset>
        </center>
        </form>
        </div>
    );
};
export default Page;