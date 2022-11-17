import httpClient from 'services/httpClient';
const path = '/auth/authenticate';
export function signIn({ email, password }) {
    const payload = {
        email,
        senha: password,
    };
    return httpClient.post(path, payload);
}
