/// <reference types="react" />

// webpack module federation remotes
declare module 'utfpr-admit-mfe/AdmitRoutes' {
  const Component: React.FunctionComponent<{ basename?: string }>

  export default Component
}
