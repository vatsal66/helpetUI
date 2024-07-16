/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, ImageWrapper, MainCard } from './styled';

const HeaderPetId = () => {
  return (
  // <div className="container">
  //     <div className="card">
  //     <img src="../assets/images/HomeBlog/Blog-2.svg" alt="Dog with passport" className="card-image" />
  //     <span className="tag document">Documenti</span>
  //     <div className="card-content">
  //         <div className="card-header">
  //         <span className="date">Luglio 18, 2023</span>
  //         <span className="author">helpetapp</span>
  //         <span className="comments">0</span>
  //         </div>
  //         <h3>Passaporto per il Cane: Come Richiederlo, Quanto Costa e Quando Serve</h3>
  //         <p>Stai per partire per un viaggio al di fuori dell'Italia con il tuo amico a quattro zampe? Lo sapevi che anche il tuo pelosetto ha bisogno del passaporto per oltrepassare i confini nazionali? All'interno di questa guida vediamo nel dettaglio che cos'è il passaporto per il cane, quando serve, quanto costa...</p>
  //     </div>
  //     </div>

  // <div className="card">
  // <img src="../assets/images/HomeBlog/Blog-1.svg" alt="Dog in airplane" className="card-image" />
  // <span className="tag travel">Viaggi</span>
  // <div className="card-content">
  //     <div className="card-header">
  //     <span className="date">Luglio 18, 2023</span>
  //     <span className="author">helpetapp</span>
  //     <span className="comments">12</span>
  //     </div>
  //     <h3>Cane in Aereo: Quali sono le Regole 2023 e i Consigli</h3>
  //     <p>Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?</p>
  // </div>
  // </div>
  // <div className="card">
  // <img src="../assets/images/HomeBlog/Blog-2.svg" alt="Dog on vacation" className="card-image" />
  // <span className="tag travel">Viaggi</span>
  // <div className="card-content">
  //     <div className="card-header">
  //     <span className="date">Luglio 18, 2023</span>
  //     <span className="author">helpetapp</span>
  //     <span className="comments">12</span>
  //     </div>
  //     <h3>Dove Andare in Vacanza con il Cane: le 10 Migliori Mete in Italia e in Europa</h3>
  //     <p>Se sei un amante degli animali e desideri trascorrere le tue vacanze in compagnia del tuo fedele amico a quattro zampe, allora...</p>
  // </div>
  // </div>
  // </div>

    <Container>
      <MainCard>
        <ImageWrapper>
          <img src="../assets/images/HomeBlog/Blog-2.svg" alt="Dog with passport" style={{ width: '100%', height: 'auto' }} />
        </ImageWrapper>
        <ColRightSide>
          <CardHeader>
            <CardHeaderName>
              <img src='../assets/images/HomeBlog/Icon-1.svg'></img>
              <CardSubName>Luglio 18, 2023</CardSubName>
            </CardHeaderName>
            <CardHeaderName>
              <img src='../assets/images/HomeBlog/Icon-2.svg'></img>
              <CardSubName>helpetapp</CardSubName>
            </CardHeaderName>
            <CardHeaderName>
              <img src='../assets/images/HomeBlog/Icon-3.svg'></img>
              <CardSubName>0</CardSubName>
            </CardHeaderName>
          </CardHeader>
          <CardMainTitle>Passaporto per il Cane: Come Richiederlo, Quanto Costa e Quando Serve</CardMainTitle>
          <CardSubTitle>Stai per partire per un viaggio al di fuori dell'Italia con il tuo amico a quattro zampe? Lo sapevi che anche il tuo pelosetto ha bisogno del passaporto per oltrepassare i confini nazionali? All'interno di questa guida vediamo nel dettaglio che cos'è il passaporto per il cane, quando serve, quanto costa...</CardSubTitle>
        </ColRightSide>
      </MainCard>
    </Container>
  );
};

export default HeaderPetId;
