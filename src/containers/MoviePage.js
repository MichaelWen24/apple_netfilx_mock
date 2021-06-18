import React, { useEffect } from "react";
import MovieList from "../components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieAction,
  fetchMovieAction,
  removeMovieAction,
} from "../actions/actions";
import logo from "../components/Netflix-Logo.png";
import styled from "styled-components";

function MoviePage() {
  const dispatch = useDispatch();
  const { myList, recommendations, loading } = useSelector((state) => {
    return state.movie;
  });

  useEffect(() => {
    dispatch(fetchMovieAction());
  }, [dispatch]);

  const handleRemoveMovie = (movie) => {
    dispatch(removeMovieAction(movie));
  };

  const handleADDMovie = (movie) => {
    dispatch(addMovieAction(movie));
  };

  return (
    <div className="movie-page">
      <Image className="logo" src={logo} alt="netflix" />
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <div className="my-list">
            <StyledTitle>My List</StyledTitle>
            <MovieList
              movies={myList}
              handleButtonClick={handleRemoveMovie}
              buttonTitle="Remove"
            />
          </div>
          <hr />
          <div className="recommendations">
            <StyledTitle>Recommendations</StyledTitle>
            <MovieList
              movies={recommendations}
              handleButtonClick={handleADDMovie}
              buttonTitle="Add"
            />
          </div>
        </>
      )}
    </div>
  );
}

const Image = styled.img`
  width: 200px;
`;

const StyledTitle = styled.h2`
  margin-left: 20px;
`;

export default MoviePage;
