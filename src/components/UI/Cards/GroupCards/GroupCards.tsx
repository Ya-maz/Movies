import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../../store/Loader/Loader";
import { RootState } from "../../../store/reducers/rootReducer";
import Poster from "../Card/Poster";
import "./GroupCard.css";

const GroupCards: React.FC = () => {
  const data = useSelector((state: RootState) => state.request.data);
  const isLoading = useSelector((state: RootState) => state.loading.loading);
  return (
    <div className="group">
      {isLoading ? <Loader /> : null}
      {Object.keys(data).length === 0 ? (
        <h1>Is empty</h1>
      ) : (
          data.map((filmInfo, i) => <Poster key={ i + filmInfo.Title } data={ filmInfo}/>)
          // data.map((filmInfo, key) => <Poster
          //   key={key + filmInfo.Title}
          //   title={filmInfo.Title}
          //   year={ filmInfo.Year}
          //   poster={filmInfo.Poster}
          //   runtime={filmInfo.Runtime}
          //   released={filmInfo.Released}
          //   rating={filmInfo.Ratings}
          // />)
      )}
      
    </div>
  );
};

export default GroupCards;
