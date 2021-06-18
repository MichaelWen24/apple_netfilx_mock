import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function Movie({ title, image, handleButtonClick, buttonTitle, movie }) {
  const [buttonVisible, setbuttonVisible] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setbuttonVisible(true)}
      onMouseLeave={() => setbuttonVisible(false)}
    >
      <Image src={image} alt={title} />
      <StyledTitleContainer>
        <StyledP>{title}</StyledP>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  min-width: 200px;
  min-height: 330px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  margin: 10px;
`;

const Image = styled.img`
  height: 280px;
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledP = styled.p`
  margin-left: 8px;
  font-size: 18px;
`;

export default Movie;
