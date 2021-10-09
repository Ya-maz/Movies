import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputLineForSearch from "../../Input/Input";
import GroupCards from "../../Cards/GroupCards";
import { getMoviesFetchRequestedCreator } from "../../store/actions";
import { createRightUrl } from "../../../utils";

const Home: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const enterPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      dispatch(getMoviesFetchRequestedCreator(createRightUrl(title)));
      setTitle("");
    }
  };

  const buttonHandler = (): void => {
    dispatch(getMoviesFetchRequestedCreator(createRightUrl(title)));
    setTitle("");
  };


  return (
    <div>
      <InputLineForSearch
        inputHandler={inputHandler}
        title={title}
        enterPressHandler={enterPressHandler}
        buttonHandler={buttonHandler}
      />
      <GroupCards />
    </div>
  );
};
export default Home;
// {target: {value}
