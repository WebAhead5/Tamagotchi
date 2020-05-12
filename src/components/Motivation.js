import React from "react";


const Motivation = props => {

return (
    <div>
    <form onSubmit={(e)=> {e.preventDefault();}}>
      <fieldset>
        <div>
        <h2>Motivation:</h2>
        </div>

      </fieldset>
    </form>
  </div>
);
}

export default Motivation;