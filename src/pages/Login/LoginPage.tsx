import React from 'react'

import { Logo } from 'components/Logo'
import { FormSignIn } from 'components/FormSignIn'

import { LoginWrapper, Header, Content } from './LoginPage.styles'

export const LoginPage = React.memo((): JSX.Element => {
  return (
    <LoginWrapper>
      <Header>
        <Logo width="106" height="126" />
        <span>Login</span>
      </Header>
      <Content>
        <FormSignIn />
      </Content>
    </LoginWrapper>
  )
})
