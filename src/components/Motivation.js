import React, { useEffect } from "react";
var src1="/home/amir/repo01/projects/Tamagotchi/public/22220.png"

var maxtime =30;
var dividby6=6;
const Motivation = props => {


    
   const[Cegaret,setCegaret]= React.useState(["","","","","",""])
   React.useEffect(() => {
       setInterval(() => {
           setCegaret(previousCegaret=> previousCegaret.slice(0,-1))
           
       }, 1000);

  }, []);
return (
    <div>
    <form onSubmit={(e)=> {e.preventDefault();}}>
      <fieldset>
        <div>
        <h2>Motivation:</h2>
       {Cegaret.map(()=><img src={src1}  />)}
        </div>
      </fieldset>
    </form>
  </div>
);
}

export default Motivation;