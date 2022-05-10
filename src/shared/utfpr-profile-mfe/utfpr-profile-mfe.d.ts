/// <reference types="react" />

// webpack module federation remotes
declare module 'utfpr-profile-mfe/ProfileRoutes' {
  const Component: React.FunctionComponent<{ basename?: string }>

  export default Component
}
