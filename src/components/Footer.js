import React from "react";
import F from "./Footer.styled";

const Footer = () => {
  return (
    <F.Footer>
      <F.Content>
        <F.LinkContainer>
          <F.LinkTitle>넷플릭스 대한민국</F.LinkTitle>
          <F.LinkContent>
            <F.Link href="https://help.netflix.com/ko/node/412">
              넷플릭스 소개
            </F.Link>
            <F.Link href="https://help.netflix.com/ko">고객 센터</F.Link>
            <F.Link href="https://help.netflix.com/ko">미디어 센터</F.Link>
            <F.Link href="https://help.netflix.com/ko">이용 약관</F.Link>
          </F.LinkContent>
          <F.DescriptionContainer>
            <F.DescRight>Netflix Rights Reserved.</F.DescRight>
          </F.DescriptionContainer>
        </F.LinkContainer>
      </F.Content>
    </F.Footer>
  );
};

export default Footer;
