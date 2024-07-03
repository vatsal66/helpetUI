import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from '@components/atoms';
import { useIntl } from "react-intl";

import { StoreBadges } from '@components/molecules';
import { LanguageFlag } from '@components/quarks';

import companyLogo from "../../../assets/images/NavBar/companyLogo.png";
import FiChevronUp from "../../../assets/images/NavBar/ArrowUp.png";
import FiChevronDown from "../../../assets/images/NavBar/ArrowDown.svg";
import UpArrow from "../../../assets/images/NavBar/UpArrow.svg";
import BottomArrow from "../../../assets/images/NavBar/BottomArrow.svg";
import Userprofile from '../../../assets/images/NavBar/user.svg';

// import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import expand/collapse icons
import BrazilFlagSvg from '@assets/icons/brazil-flag.svg';
import ItalyFlagSvg from '@assets/icons/italy-flag.svg';
import UKFlagSvg from '@assets/icons/uk-flag.svg';

const Navbar = () => {
  const { messages, locale } = useIntl();
  const [isExpanded, setIsExpanded] = useState(false); // State for dropdown toggle
  const [isExpandedCountry, setIsExpandedCountry] = useState(false)

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCountryDropdown = () => {
    setIsExpandedCountry(!isExpandedCountry)
  }

  return (
    <Container>
      <Logo>
        <img src={companyLogo} alt="Company Logo" />
      </Logo>
      <Mainheader active={isExpanded}>
        <Title active>{messages["header.header1"]}</Title>
        <Title>{messages["header.header2"]}</Title>
        <Title active>
          <div onClick={toggleDropdown} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            {messages["header.header3"]}
            {isExpanded ? <img src={FiChevronUp} alt="" /> : <FiChevronDown />}
          </div>
          {isExpanded && (
            <div>
              <DropdownItem>{messages["header.header31.value1"]}</DropdownItem>
              <DropdownItem>{messages["header.header31.value1"]}</DropdownItem>
              <DropdownItem>{messages["header.header31.value2"]}</DropdownItem>
              <DropdownItem>{messages["header.header31.value3"]}</DropdownItem>
              <DropdownItem>{messages["header.header31.value4"]}</DropdownItem>
            </div>
          )}
        </Title>
        <Title>{messages["header.header4"]}</Title>
        <Title>{messages["header.header5"]}</Title>
        <Title>{messages["header.header6"]}</Title>
      </Mainheader>
      <Actions active={isExpandedCountry}>
        <CountryFlag active>
          <div onClick={toggleCountryDropdown} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between',
            gap: '10px'
          }}>
            <LanguageFlag
              width={28}
              height={28}
              Svg={BrazilFlagSvg}
            />
            {isExpandedCountry ? <UpArrow /> : <BottomArrow />}
          </div>
          {isExpandedCountry && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2px' }}>
                <LanguageFlag
                  width={28}
                  height={28}
                  Svg={ItalyFlagSvg}
                />
                <CountryTitle>
                  IT
                </CountryTitle>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '2px' }}>
                <LanguageFlag
                  width={28}
                  height={28}
                  Svg={UKFlagSvg}
                />
                <CountryTitle>
                  PT
                </CountryTitle>
              </div>
            </>
          )}
        </CountryFlag>

        <StyledButton>
          <Userprofile />{messages['header.login']}
        </StyledButton>
      </Actions>
    </Container>
  );
};

export default Navbar;

const Mainheader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin: ${({ active }) => (active ? "8.5px 31px 0 25px" : "0 31px 0 25px")};
  max-height: -webkit-fill-available
`;

const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1001;
  top: 70px;
  height: 54px;
`;

const Logo = styled.div`
  margin-top: 5px;
  img {
    height: 40px;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: ${({ active }) => (active ? "baseline" : "center")}; center;
  margin: ${({ active }) => (active ? "8.5px 0 0 0" : "5px 0 0 0")};
  max-height: -webkit-fill-available;
  gap: 8px
`;

const LoginButton = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  background: ${({ active }) => (active ? "#B5EBDB" : "none")};
  border: ${({ active }) => (active ? "3px solid #064641" : "none")};
  font-size: 20px;
  font-weight: 700;
  line-height: 27.28px;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 7.8px 0px #00000040" : "none"};
  border-radius: ${({ active }) => (active ? "20px" : "none")};
  padding: ${({ active }) => (active ? "2px 15px" : "none")};
`;

const CountryFlag = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  background: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.28px;
  border-radius: 20px;
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

const CountryTitle = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 10px;
  font-weight: 700;
  line-height: 13.64px;
`;

const DropdownItem = styled.div`
  padding: 1.5px 3px;
  cursor: pointer;
`;

const StyledButton = styled(Button)`
display: flex;
align-items: center;
font-size: 18px;
padding: 5px 15px;
gap: 8px;
`;