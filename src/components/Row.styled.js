import styled, { css } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const R = {};

R.Row = styled.section`
  margin-left: 20px;
  color: white;
  h2 {
    padding-left: 20px;
  }
`;

R.Slider = styled.div`
  position: relative;
`;

R.SliderArrowLeftContainer = styled.div`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transition: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  ${R.Slider}:hover & {
    transition: 400ms all ease-in-out;
    visibility: visible;

    &:hover {
      background: rgba(20, 20, 20, 0.5);
      transition: 400ms all ease-in-out;
    }
  }
`;

R.SliderArrowRightContainer = styled.div`
  background-clip: content-box;
  padding: 20px 0;
  box-sizing: border-box;
  transition: 400ms all ease-in-out;
  cursor: pointer;
  width: 80px;
  z-index: 1000;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;

  ${R.Slider}:hover & {
    transition: 400ms all ease-in-out;
    visibility: visible;

    &:hover {
      background: rgba(20, 20, 20, 0.5);
      transition: 400ms all ease-in-out;
    }
  }
`;

R.ArrowLeft = styled(IoIosArrowBack)`
  transition: 400ms all ease-in-out;
  color: white;

  ${R.SliderArrowLeftContainer}:hover & {
    transition: 400ms all ease-in-out;
    transform: scale(1.5);
  }
`;

R.ArrowRight = styled(IoIosArrowForward)`
  transition: 400ms all ease-in-out;
  color: white;

  ${R.SliderArrowRightContainer}:hover & {
    transition: 400ms all ease-in-out;
    transform: scale(1.5);
  }
`;

R.PosterContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 0 20px 20px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

R.Poster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 144px;
  margin-right: 10px;
  transition: transform 450ms;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }

  ${(props) =>
    props.isLargeRow &&
    css`
      max-height: 320px;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
    `}
`;

export default R;
