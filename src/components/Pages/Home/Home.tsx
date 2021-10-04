import React, { useState } from "react";
import InputLineForSearch from "../../Input/Input";
import GroupCards from "../../Cards/GroupCards";



const Home:React.FC = () => {
  const [title, setTitle] = useState<string>('')

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const enterPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      setTitle('')
    }
  }

  const buttonHandler = (): void => {
    setTitle('')
  }
  
  console.log(title)
  return (
    <div>
      <InputLineForSearch inputHandler={inputHandler} title={title} enterPressHandler={enterPressHandler}
      buttonHandler={buttonHandler}/>
      <GroupCards />
    </div>
  );
};
export default Home;
// {target: {value}