/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import { Input, InputAdornment } from "@mui/material";
import { Link } from "gatsby";

import { Button } from '@components/atoms';
import { LanguageFlag } from '@components/quarks';

import BrazilFlagSvg from '@assets/icons/brazil-flag.svg';
import ItalyFlagSvg from '@assets/icons/italy-flag.svg';
import UKFlagSvg from '@assets/icons/uk-flag.svg';
import CompanyLogo from "@assets/images/common/blogCompanyLogo.svg";
import SearchIcon from "@assets/images/common/search.svg";
import UpArrow from "@assets/images/NavBar/UpArrow.svg";
import BottomArrow from "@assets/images/NavBar/BottomArrow.svg";

const Navbar = ({ activeSideCategory, handleSearch }) => {
  const [isExpandedCountry, setIsExpandedCountry] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleCountryDropdown = () => {
    setIsExpandedCountry(!isExpandedCountry);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Container>
        <Logo>
          <Link to="/">
            <CompanyLogo />
          </Link>
        </Logo>
        <Actions active={isExpandedCountry}>
          <Title active={activeSideCategory !== ""}>Torna al sito</Title>
          <Input
            className="blog-header"
            disableUnderline={true}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <StyledButton onClick={() => handleSearch(inputValue)}>Cerca</StyledButton>
          <CountryFlag active>
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
        </Actions>
      </Container>
      <style>
        {`
          .blog-header {
            background-color: #ffffff;
            border: 4px solid #A00483;
            border-radius: 14px;
            outline: none;
            color: #343434;
            font-size: 20px;
            font-weight: 700;
            font-family: Nunito;
            caret-color: #343434;
            padding: 8px;
            width: 300px;
            height: 40px;
            margin-left: 52px;
          }
          .blog-header::placeholder {
            color: #343434;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;

const Container = styled.header`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
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
  cursor: pointer;
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

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  padding: 3px 27px;
  border: 4px solid #A00483;
  background: #C54EAE;
`;