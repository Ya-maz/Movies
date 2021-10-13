import React from "react";
import { useSelector , useDispatch } from "react-redux";
import Loader from "../../Loader/Loader";
import { RootState } from "../../../store/reducers/rootReducer";
import { Search } from "../../../store/type/actionsType";

import Poster from "../Poster/Poster";
import "./GroupCard.css";
import { createTitleUrl } from "../../../../utils";
import { getMovieByIdFetchRequestedCreator } from "../../../store/actions";

const GroupCards: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.search.data.Search);
  const isLoading = useSelector((state: RootState) => state.loading.loading);
  console.log(data);
  const buttonHandler = (tt: string): void => {
    console.log(tt);
    dispatch(getMovieByIdFetchRequestedCreator(createTitleUrl(tt)));
  };
  return (
    <div className="group">
      {isLoading ? <Loader /> : null}
      {Object.keys(data).length === 0 ? (
        <h1>Here is empty</h1>
      ) : (
        // <h1>Soon...</h1>)
        data.map((filmInfo: Search, i: number) => <Poster key={i} {...filmInfo} buttonHandler={buttonHandler} />)
      )}
    </div>
  );
};

export default GroupCards;
