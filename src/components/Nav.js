import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 30px;
  z-index: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  ${(props) =>
    props.show &&
    css`
      background-color: #111;
    `}
`;

const LogoSvg = styled.svg`
  position: fixed;
  left: 40px;
  width: 80px;
  object-fit: contain;
`;

const AvatarSvg = styled.svg`
  position: fixed;
  right: 40px;
  width: 30px;
  object-fit: contain;
`;

const NavInput = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: none;
`;

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavContainer show={show}>
      <LogoSvg width="80" height="20">
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          width="80"
          height="20"
          onClick={() => window.location.reload()}
        />
      </LogoSvg>
      <NavInput
        value={searchValue}
        onChange={handleChange}
        type="text"
        placeholder="영화를 검색해주세요."
      />
      <AvatarSvg width="30" height="30">
        <image
          href="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          width="30"
          height="30"
        />
      </AvatarSvg>
    </NavContainer>
  );
};

export default Nav;
