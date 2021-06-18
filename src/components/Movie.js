import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Movie({ title, image, handleButtonClick, buttonTitle, movie }) {
  const [buttonVisible, setbuttonVisible] = useState(false);

  return (
    <StyledMovie
      onMouseEnter={() => setbuttonVisible(true)}
      onMouseLeave={() => setbuttonVisible(false)}
    >
      <img src={image} alt={title} />
      <StyledTitleContainer>
        <p>{title}</p>
        {buttonVisible && (
          <Button
            onClick={() => {
              handleButtonClick(movie);
            }}
          >
            {buttonTitle}
          </Button>
        )}
      </StyledTitleContainer>
    </StyledMovie>
  );
}

const StyledMovie = styled.div`
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  margin: 10px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default Movie;
