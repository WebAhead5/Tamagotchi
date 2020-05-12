import React from "react";

const TextFilter = props => {
    const [text,onTextchange] = React.useState("");
    const changeText =  (value) => onTextchange(value);
    return (
        <div>
          <form onSubmit={(e)=> {e.preventDefault();}}>
            <fieldset>
              <legend>User name</legend>
              <div>
                <input
                  type="text"
                  id="free_text"
                  name="name"
                  onChange={e => changeText(e.target.value)}
                  >
                </input>
                <button onClick={() => {if(text.length > 0) props.handleChangeText(text)}}>Search</button>
              </div>
            </fieldset>
          </form>
        </div>
    );
  }
  
  export default TextFilter;