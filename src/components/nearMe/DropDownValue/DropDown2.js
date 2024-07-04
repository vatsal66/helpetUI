import React, { useState } from "react";
import CloseIcon from '@assets/images/NearMe/close.svg'
import OpenIcon from '@assets/images/NearMe/open.svg'
import { DropDownContainer, DropDownList, InputBox, InputMenu, ListData } from "./styled";

const DropDown2 = ({ suggestionsList }) => {
  const [keyword, setKeyword] = useState("");
  const [openState, setOpenState] = useState(false)

  const getSearchTerm = (event) => {
    setKeyword(event.target.value);
    setOpenState(
      suggestionsList.filter((e) => e.suggestion.toLowerCase().includes(event.target.value.toLowerCase()))?.length === 0
        ? false
        : true
    );
  };

  return (
    <DropDownContainer>
      <InputBox>
        <input
          value={keyword}
          onChange={getSearchTerm}
          placeholder="Rieti"
          className="custom-placeholder"
          style={{
            backgroundColor: 'unset',
            border: 0,
            outline: 'none',
            width: '90%',
            color: '#ac4800',
            fontSize: '20px',
            fontWeight: '700',
            caretColor: '#ac4800',
          }}
        />
        {openState ? <CloseIcon onClick={() => setOpenState(!openState)} /> : <OpenIcon onClick={() => setOpenState(!openState)} />}
      </InputBox>
      {openState && (
        <DropDownList>
          {suggestionsList.filter((e) => e.suggestion.toLowerCase().includes(keyword.toLowerCase()))
            .map((eachItem) => (
              <ListData>{eachItem?.suggestion}</ListData>
            ))}
        </DropDownList>
      )}
      <style>
        {`
          .custom-placeholder::placeholder {
            color: #AC4800;
          }
        `}
      </style>
    </DropDownContainer>
  );
};

export default DropDown2;
