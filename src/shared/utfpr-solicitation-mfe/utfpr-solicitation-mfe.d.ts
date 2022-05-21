/// <reference types="react" />

// webpack module federation remotes
declare module 'utfpr-solicitation-mfe/SolicitationRoutes' {
  const Component: React.FunctionComponent<{ basename?: string }>

  export default Component
}
