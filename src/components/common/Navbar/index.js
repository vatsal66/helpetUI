import React, { useState } from "react";
import { useIntl } from "react-intl";

import { LanguageFlag } from '@components/quarks';

import BrazilFlagSvg from '@assets/icons/brazil-flag.svg';
import ItalyFlagSvg from '@assets/icons/italy-flag.svg';
import UKFlagSvg from '@assets/icons/uk-flag.svg';

import {
  Actions, CompanyLogoStyle, Container,
  CountryFlag, CountryTitle, DropdownItem,
  LoginButtonText, Mainheader, StyledButton, Title,
} from "./styled";

import CompanyLogo from "../../../assets/images/NavBar/companyLogo.svg";
import FiChevronUp from "../../../assets/images/NavBar/ArrowUp.png";
import FiChevronDown from "../../../assets/images/NavBar/ArrowDown.svg";
import UpArrow from "../../../assets/images/NavBar/UpArrow.svg";
import BottomArrow from "../../../assets/images/NavBar/BottomArrow.svg";
import Userprofile from '../../../assets/images/NavBar/user.svg';
import LinkComponent from "../LinkComponent";

const normalizePath = (path) => path.replace(/\/+$/, "");

const Navbar = () => {
  const { messages } = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpandedCountry, setIsExpandedCountry] = useState(false);

  const isActive = (path) => {
    const pathName = typeof window !== 'undefined' ? window.location.pathname : '';
    return normalizePath(pathName) === normalizePath(path);
  };

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleCountryDropdown = () => {
    setIsExpandedCountry(!isExpandedCountry);
  };

  return (
    <div style={{
      position: 'absolute',
      top: '70px',
      zIndex: '1001',
      width: '100%',
    }}>
      <Container>
        <CompanyLogoStyle>
          <LinkComponent routes="/">
            <CompanyLogo style={{ width: '100%' }} />
          </LinkComponent>
        </CompanyLogoStyle>
        <Mainheader active={isExpanded}>
          <LinkComponent routes="/">
            <Title active={isActive("/")}>
              {messages["header.header1"]}
            </Title>
          </LinkComponent>
          <LinkComponent routes="/">
            <Title>
              {messages["header.header2"]}
            </Title>
          </LinkComponent>
          <Title active={isExpanded || isActive("/petid") || isActive("/librettosanitario") || isActive("/nearme") || isActive("/nearmedetail") || isActive("/nearmericerca")}>
            <div onClick={toggleDropdown} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'space-between',
              gap: '10px',
            }}>
              {messages["header.header3"]}
              {isExpanded ? <img src={FiChevronUp} alt="" /> : <FiChevronDown />}
            </div>
            {isExpanded && (
              <div>
                <DropdownItem>{messages["header.header31.value1"]}</DropdownItem>
                <LinkComponent routes="/petid"><DropdownItem active={isActive("/petid")}> {messages["header.header31.value2"]}</DropdownItem></LinkComponent>
                <LinkComponent routes="/librettosanitario"><DropdownItem active={isActive("/librettosanitario")}> {messages["header.header31.value3"]}</DropdownItem></LinkComponent>
                <LinkComponent routes="/nearme"><DropdownItem active={isActive("/nearme") || isActive("/nearmedetail") || isActive("/nearmericerca")}>{messages["header.header31.value4"]}</DropdownItem></LinkComponent>
              </div>
            )}
          </Title>
          <LinkComponent routes="/professional">
            <Title active={isActive("/professional")}>
              {messages["header.header6"]}
            </Title>
          </LinkComponent>
          <LinkComponent routes="/homeBlog">
            <Title active={isActive("/homeBlog") || isActive("/homeBlogDetails")}>
              {messages["header.header4"]}
            </Title>
          </LinkComponent>
          <Title>{messages["header.header5"]}</Title>
        </Mainheader>
        <Actions active={isExpandedCountry}>
          <CountryFlag active={isExpandedCountry}>
            <div onClick={toggleCountryDropdown} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: 'space-between',
              gap: '10px',
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
            <Userprofile /><LoginButtonText>{messages['header.login']}</LoginButtonText>
          </StyledButton>
        </Actions>
      </Container>
    </div>
  );
};

export default Navbar;
