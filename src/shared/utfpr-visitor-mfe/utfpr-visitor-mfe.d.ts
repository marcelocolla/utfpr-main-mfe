/// <reference types="react" />

// webpack module federation remotes
declare module 'utfpr-visitor-mfe/VisitorRoutes' {
  const Component: React.FunctionComponent<{ basename?: string }>

  export default Component
}
