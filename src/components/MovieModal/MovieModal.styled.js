import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const M = {};

M.Template = styled.div`
  z-index: 1200;
  position: absolute;
`;

M.WrapperModal = styled.div`
  position: fixed;
  inset: 0px;
  background-color: rgb(0, 0, 0 / 71%);
  -webkit-tap-highlight-color: transparent;
  display: flex;
  justify-content: center;

  @media screen and (max-height: 768px) {
    align-items: unset;
    padding-top: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

M.Modal = styled.div`
  position: relative;
  max-width: 800px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0, 14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
  background: #111;
  overflow: hidden;
  border-radius: 8px;
  transition: all 400ms ease-in-out 2s;
  animation: fadein 400ms;

  @media screen and (max-height: 768px) {
    overflow-y: scroll;
  }

  @media screen and (max-width: 768px) {
    overflow-y: scroll !important;
  }

  &::-webkit-scrollbar {
    display: none;
    visibility: hidden;
  }

  @keyframes fadein {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

M.CloseModal = styled(IoMdClose)`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  z-index: 1000;
  color: white;
`;

M.ModalPoster = styled.img`
  width: 100%;
  height: auto;
`;

M.ModalContent = styled.div`
  padding: 40px;
  color: white;
`;

M.ModalDetail = styled.p`
  font-weight: 600;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

M.ModalUserTaste = styled.span`
  color: #46d369;
`;

M.ModalTitle = styled.h2`
  padding: 0;
  font-size: 40px;
  margin: 16px 0;
`;

M.ModalOverview = styled.p`
  font-size: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export default M;
