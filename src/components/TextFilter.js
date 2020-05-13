import React from "react";

const TextFilter = props => {
    const [text,onTextchange] = React.useState("");
    const changeText =  (value) => onTextchange(value);
    const _handleKeyDown = function(e) {
      if (e.key === 'Enter') {
        if(text.length > 0) props.handleChangeText(text)
      }
    }
    if(props.userData)return <div></div>
    return (
        <div>
          <form onSubmit={(e)=> {e.preventDefault();}}>
              <div>
                <label for="free_text">Please chosse a user</label><br/>
                <input
                  type="text"
                  id="free_text"
                  name="name"
                  onChange={e => changeText(e.target.value)}
                  onKeyDown={_handleKeyDown}
                  >
                </input>
              </div>
          </form>
        </div>
    );
  }
  
  export default TextFilter;