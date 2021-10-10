import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/rootReducer";
import MainCard from "../../UI/Cards/MainCard/MainCard";

const Movie: React.FC = () => {
  const data = useSelector((state: RootState) => state.request.data);
  return <MainCard {...data} />;
};
export default Movie;
