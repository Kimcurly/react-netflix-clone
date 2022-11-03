import styled from "styled-components";

const S = {};

S.Container = styled.section`
  background-color: black;
  width: 100%;
  text-align: center;
  padding: 5rem 0;
`;

S.NoResult = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  color: #c5c5c5;
  height: 100%;
  padding: 8rem;
`;

S.NoResultsText = styled.div``;

S.Movie = styled.div`
  flex: 1 1 auto;
  display: inline-block;
  padding-right: 0.5rem;
  padding-bottom: 7rem;
`;

S.MovieColumnPoster = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;

  &:hover {
    transform: scale(1.25);
  }
`;

S.MoviePoster = styled.img`
  width: 90%;
  border-radius: 5px;
`;

export default S;
