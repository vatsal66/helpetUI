import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 54px;
  margin: 0 auto;

  @media (max-width: 1300px) {
    width: 95%;
  }
`;

export const Mainheader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 15px;
  margin: ${({ active }) => (active ? "7.5px 0 0 0" : "0")};
  max-height: -webkit-fill-available;

  @media (max-width: 1300px) {
    gap: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-top: ${({ active }) => (active ? "4.5px" : "0")};
  max-height: -webkit-fill-available
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  background: ${({ active }) => (active ? "#B5EBDB" : "none")};
  border: ${({ active }) => (active ? "3px solid #064641" : "none")};
  font-size: 20px;
  font-weight: 700;
  box-shadow: ${({ active }) =>
    active ? "0px 4px 7.8px 0px #00000040" : "none"};
  border-radius: ${({ active }) => (active ? "20px" : "unset")};
  padding: ${({ active }) => (active ? "2px 15px" : "unset")};
  cursor: pointer;

  @media (max-width: 1300px) {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const CountryFlag = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  background: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: ${({ active }) => (active ? "23px" : "50px")};
  gap: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px 11px;

  @media (max-width: 1300px) {
    font-size: 18px;
    border-radius: 40px;
    padding: 9px 13px;
    }
    
  @media (max-width: 1000px) {
    font-size: 16px;
    border-radius: 35px;
    padding: 7.5px 11px;
  }
`;

export const CountryTitle = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: 10px;
  font-weight: 700;
  line-height: 13.64px;
`;

export const DropdownItem = styled.h1`
  padding: 1.5px 3px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "800" : '600')};
  font-size: 18px;

  @media (max-width: 1300px) {
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10.5px 15px;
  gap: 8px;
  border-radius: 50px;
  background: #A00483;
  border: none;
  margin-bottom: auto;
  
  @media (max-width: 1300px) {
    border-radius: 40px;
    padding: 9px 13px;
    gap: 7px;
  }
    
  @media (max-width: 1000px) {
    border-radius: 35px;
    padding: 7.5px 11px;
    gap: 6px;
  }
`;

export const LoginButtonText = styled.h2`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 1300px) {
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const CompanyLogoStyle = styled.div`
  width: 188px;

  @media (max-width: 1300px) {
    width: 150px;
  }

  @media (max-width: 1000px) {
    width: 125px;
  }
`;
