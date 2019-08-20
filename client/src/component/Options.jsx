import React from 'react';

const Options = (props) => {
  const listItem = props.brands.map(brand => (
    <label>
    <input 
      type="checkbox" 
      value={`${brand}`} 
      onChange={props.checkBox} 
    />
    {brand}
    </label>
  ));

  return(
    <div>
      <form>
        <div>{listItem}</div>
      </form>
      <button onClick={props.submitBtn}>Submit</button>
    </div>
  )
}


export default Options;