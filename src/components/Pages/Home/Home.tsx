import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLineForSearch from "../../UI/Input/Input";
import GroupCards from "../../UI/Cards/GroupCards/GroupCards";
import { getMoviesFetchRequestedCreator, justSortItCreator } from "../../store/actions";
import { createSearchUrl } from "../../../utils";
import './Home.css';
import SortForm from "../../UI/SortForm/SortForm";
import { RootState } from "../../store/reducers/rootReducer";
import { payload } from "../../store/type/actionsType";

const Home: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const dispatch = useDispatch();
  const copyArray = useSelector((state: RootState) => state.search.data.Search);

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

  const dropHandler = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { target: { value } } = event;
    dispatch(justSortItCreator(value as payload))
  
  }
  return (
    <div>
      <div className="form">
        <SortForm dropHandler={ dropHandler }/>
      </div>
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
