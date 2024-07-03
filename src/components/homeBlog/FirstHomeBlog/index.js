import React from 'react'
import { Container, StartComponents, StyledContentSection } from './styled'

const HeaderPetId = () => {
  return (
    <div>
      <StyledContentSection>
        <Container>
          <StartComponents>
            {/* 1 */}
            <Col-span-1>
              <h5>Categorie</h5>
              <ul>
                <li>
                  <a href='#'>Curiosita (8)</a>
                </li>
                <li>
                  <a href='#'>Documenti (1)</a>
                </li>
                <li>
                  <a href='#'>Eventi (2)</a>
                </li>
                <li>
                  <a href='#'>Estate (1)</a>
                </li>
                <li>
                  <a href='#'>Features (3)</a>
                </li>
                <li>
                  <a href='#'>Notizie (2)</a>
                </li>
                <li>
                  <a href='#'>Nutrizione (2)</a>
                </li>
                <li>
                  <a href='#'>Salute e Benessere (23)</a>
                </li>
                <li>
                  <a href='#'>Uncategorized (1)</a>
                </li>
                <li>
                  <a href='#'>Viaggi (4)</a>
                </li>
              </ul>
            </Col-span-1>
            {/* 2 */}
            <Col-span-3>
              <card1>
                <img src='../assets/images/HomeBlog/Blog-1.svg'></img>
                {/* <adges></adges> */}
              </card1>
              <div>
                <div>
                  <img src='../assets/images/HomeBlog/Icon-1.svg'></img>
                  <p>Agosto 4, 2023</p>
                </div>
                <div>
                  <img src='../assets/images/HomeBlog/Icon-2.svg'></img>
                  <p>helpetapp</p>
                </div>
                <div>
                  <img src='../assets/images/HomeBlog/Icon-3.svg'></img>
                  <p>0</p>
                </div>
              </div>
              <h2>Cintura di sicurezza per cani:Che cos'e cosa dica la legge?</h2>
              <p>Stai per intraprendere un viaggio in auto con il tuo pelosetto? Se non puoi farlo viaggiare nel vano bagagliaio, allora è bene assicurarti di utilizzare una cintura di sicurezza per cani in modo da ancorarlo ai sedili posteriori.</p>
            </Col-span-3>
          </StartComponents>
        </Container>

      </StyledContentSection>
    </div>
  )
}

export default HeaderPetId
