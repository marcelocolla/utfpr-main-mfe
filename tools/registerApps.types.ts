export interface ModuleFederationAppConfig {
  enabled: boolean
  localName: string
  remoteName: string
  url: string
}

export interface ModuleFederationRegisterApps {
  [key: string]: ModuleFederationAppConfig
}

export interface ModuleFederationRemotes {
  [key: string]: string
}
