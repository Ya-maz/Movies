import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import MainCard from "../../UI/Cards/MainCard/MainCard";
// import MainCard from "../../UI/Cards/MainCard/MainCard";

const Movie: React.FC = () => {
  const movie = useSelector((state: RootState) => state.movie.movie);
  return <MainCard {...movie} />;
};
export default Movie;
