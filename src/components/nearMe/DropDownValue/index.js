import React from 'react';
import DropDown from './DropDown';
import { Subtitle, Title, TitleContainer, SubmitButton } from './styled';
import DropDown2 from './DropDown2';
import DropDown3 from './DropDown3';

const List1 = [
  { id: 1, suggestion: "Dentista veterinario" },
  { id: 2, suggestion: "Dog Sitter" },
  { id: 3, suggestion: "Dietologo veterinario" },
  { id: 4, suggestion: "Donazione del sangue" },
];

const List2 = [
  { id: 1, suggestion: "Roma" },
  { id: 2, suggestion: "Ravenna" },
  { id: 3, suggestion: "Rieti" },
  { id: 4, suggestion: "Rodi" },
];

const List3 = [
  { id: 1, suggestion: "Cane" },
  { id: 2, suggestion: "Gatto" },
];

const DropDownValue = () => {
  return (
    <div style={{
      display: 'flex',
      width: '80%',
      margin: '0 auto',
    }}>
      <TitleContainer>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Title>Cos’è il Pet ID</Title>
          <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
            a purus </Subtitle>
        </div>
        <div style={{
          display: 'flex',
          marginBottom: '15px',
          width: '100%',
          gap: '23px',
          height: '73px',
          zIndex: 1,
        }}>
          <div style={{ width: ' 45%' }}>
            <DropDown suggestionsList={List1} />
          </div>
          <div style={{ width: ' 20%' }}>
            <DropDown2 suggestionsList={List2} />
          </div>
          <div style={{ width: ' 20%' }}>
            <DropDown3 suggestionsList={List3} />
          </div>
          <div style={{ width: ' 15%' }}>
            <SubmitButton>Cerca</SubmitButton>
          </div>
        </div>
      </TitleContainer>

    </div>
  );
}

export default DropDownValue;
