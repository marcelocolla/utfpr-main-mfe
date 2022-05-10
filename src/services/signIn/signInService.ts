import { SignInForm, SignInPayload, SignInResponse } from 'types/signIn'
import httpClient, { HttpResponse } from 'services/httpClient'

const path = '/auth/authenticate'

export function signIn({ email, password }: SignInForm): HttpResponse<SignInResponse> {
  const payload: SignInPayload = {
    email,
    senha: password,
  }

  return httpClient.post<SignInResponse>(path, payload)
}
