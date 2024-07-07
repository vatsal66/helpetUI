import React from 'react'
import { Card, CardDetails, CardHeader, CardSection, CardTitle, Title } from './styled'

const NearMeSelectionSection = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '80%',
      margin: '0 auto',
      gap: '60px',
    }}>
      <div style={{
        width: '40%'
      }}>
        Section Left
      </div>
      <div  style={{
        width: '60%'
      }}>
        <Title>Dentista veterinario: 18 risultati trovati</Title>
        <CardSection>
          <Card>
            <CardHeader>
              <CardTitle>
                Clinica Polivet
              </CardTitle>
            </CardHeader>
            <CardDetails>

            </CardDetails>
          </Card>
        </CardSection>
      </div>
    </div>
  )
}

export default NearMeSelectionSection
