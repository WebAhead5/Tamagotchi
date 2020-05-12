import React from "react";

const TextFilter = props => {

    return (
        <div>
          <form onSubmit={(e)=> {e.preventDefault();}}>
            <fieldset>
              <legend>User name</legend>
              <div>
                <input
                  type="text"
                  id="free_text"
                  name="name">
                </input>
                <button onClick={ props.handleChangeText}>Search</button>
              </div>
  
            </fieldset>
          </form>
        </div>
    );
  }
  
  export default TextFilter;