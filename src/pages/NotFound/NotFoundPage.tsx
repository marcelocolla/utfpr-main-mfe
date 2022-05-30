import React from 'react'
import { Header } from '@utfprfabricadesoftware/utfpr-lib-ui-react'

export const NotFoundPage = () => {
  function fn() {
    //
  }

  return (
    <main>
      <Header header="Página não encontrada" signOut={fn} />

      <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 1rem' }}>
        <h3>Está página não está disponível</h3>
      </div>
    </main>
  )
}
