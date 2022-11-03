import styled from "styled-components";

const B = {};

B.Banner = styled.header`
  color: white;
  object-fit: contain;
  height: 448px;
  @media (min-width: 1500px) {
    position: relative;
    height: 600px;
  }
`;

B.FadeBottom = styled.div`
  height: 7.4rem;
  z-index: -1;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61) #111
  );
  @media (min-width: 1500px) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40rem;
  }
`;

B.Contents = styled.div`
  margin-left: 40px;
  padding-top: 140px;
  height: 190px;
  @media (max-width: 768px) {
    width: min-content !important;
    padding-left: 2.3rem;
    margin-left: 0px !important;
  }
`;

B.Description = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-weight: 500;
  font-size: 1rem;
  max-width: 400px;
  height: 80px;
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    width: auto !important;
  }
`;

B.ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

B.PlayButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.4rem 1.8rem 0.4rem 1rem;
  margin-right: 1rem;
  &:hover {
    color: #000;
    background-color: rgba(170, 170, 170, 0.9);
    transition: all 0.2s;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem !important;
    border-radius: 4px !important;
  }
`;

B.InfoButton = styled(B.PlayButton)`
  background-color: rgba(109, 109, 110, 0.7);
  color: white;
  &:hover {
    background-color: rgb(74, 74, 74);
    color: white;
  }
  @media (max-width: 768px) {
    text-align: start;
    padding-right: 1.2rem;
  }
`;

B.Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.5rem;
`;

B.VideoMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

B.VideoHomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

B.VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: -1;
  border: none;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
  }
`;

export default B;
