interface EnvironmentType {
  [key: string]: string
}

const environment: EnvironmentType = {
  REACT_APP_API_URL: 'https://utf-io-staging.herokuapp.com',
  REACT_APP_SHARED_DOMAIN: 'netlify.app',
}

export default environment
