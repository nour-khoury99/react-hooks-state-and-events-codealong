import React , {useState} from "react";

function Toggle() {
  const [isOn , setIsOn] = useState(false);

  console.log({isOn , setIsOn})

  function handleClick(event){
    setIsOn(!isOn)
  }

  const color = isOn ? "red" : "white"
  return(
    <div>
      <Header>
        <button style ={{background : color}} onClick={handleClick} >{isOn? "On" : "OFF"}</button>
      </Header>
    </div>
  )

}

export default Toggle;
