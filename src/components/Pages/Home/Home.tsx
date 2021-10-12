import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputLineForSearch from "../../UI/Input/Input";
import GroupCards from "./GroupCards/GroupCards";
import { getMoviesFetchRequestedCreator } from "../../store/actions";
import { createSearchUrl } from "../../../utils";

const Home: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value);
  };

  const enterPressHandler = (event: React.KeyboardEvent): void => {
    if (event.key === "Enter") {
      dispatch(getMoviesFetchRequestedCreator(createSearchUrl(title)));
      setTitle("");
    }
  };

  const buttonHandler = (): void => {
    dispatch(getMoviesFetchRequestedCreator(createSearchUrl(title)));
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
