import React from "react";
import styled from "styled-components";
import Movie from "./Movie";

function MovieList({ movies, handleButtonClick, buttonTitle }) {
  return (
    <Wrapper>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            image={movie.img}
            handleButtonClick={handleButtonClick}
            buttonTitle={buttonTitle}
            movie={movie}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 350px;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export default MovieList;
