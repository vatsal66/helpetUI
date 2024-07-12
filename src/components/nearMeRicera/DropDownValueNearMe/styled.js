import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 799px) {
    padding: 0 16px;
    max-width: 100%;

    > svg {
      margin-top: 32px;
      width: 140px;
    }
  }
`

export const Title = styled.h1`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.19px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`
export const Subtitle = styled.h2`
  color: #343434;
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  padding: 0 125px 0 0;

  @media (max-width: 799px) {
    font-size: 16px;
  }
`

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
`

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid #ac4800;
  background: #ffbc7d;
  border-radius: 35px;
  padding: 10px 0;
  gap: 10px;
`

export const InputMenu = styled.input`
  background-color: unset;
  border: 0;
  outline: none;
  width: 90%;
  color: #ac4800;
  font-size: 20px;
  font-weight: 700;
  caret-color: #ac4800;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: red;
  }
  :-ms-input-placeholder {
     color: red;
  }
`

export const ListData = styled.p`
  color: #ac4800;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 0 5px 25px;
  position: relative;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 5px solid #ac4800;
      border-left: none;
      border-right: none;
    }
  }
`


export const DropDownList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 7px 7px;
  overflow: hidden;
`

export const SubmitButton = styled.button`
  border: 5px solid #ac4800;
  background: #ffbc7d;
  border-radius: 35px;
  width: 100%;
  color: #ac4800;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 23px 0;
`
