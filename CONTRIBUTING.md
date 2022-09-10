# Guia de Contribuição


## Estrutura de Arquivos

Estrutura de organização de pastas.

```shell
./
├── docs/
│   ├── arch-mfe.drawio
│   └── arch-spa.drawio
├── public/
│   └── index.html
├── src/
│   ├── ..
│   ├── bootstrap.tsx
│   └── index.tsx                 # arquivo de entrada da aplicação
├── tools/
│   ├── appsEntry.ts              # configuração dos MFEs usados pela aplicação
│   └── environment.ts            # variaveis de ambiente ao iniciar projeto local
├── webpack/
│   ├── moduleFederation.ts       # inicialização do plugin module federation
│   ├── webpack.common.ts         # configuração do webpack compartilhas entre os ambientes
│   ├── webpack.dev.config.ts     # configuração do webpack para *dev*
│   └── webpack.prod.config.ts    # configuração do webpack para *prod*
├── .babelrc
├── .eslintrc.json
├── .gitlab-ci.yml                # regras de pipeline que serão executadas
├── .npmrc                        # configuração para instalar pacotes privados
├── .prettierrc
├── package.json
└── tsconfig.json
```


### Estrutura do código

```shell
src/
├── app/
│   ├── MainApp.tsx           # responsável configurar rotas, tema e navegação
│   └── RoutesApp.tsx         # responsável renderizar as rotas mapeadas
│   └── RoutesMap.ts          # responsável fazer mapeamento das rotas
├── components/
├── pages/
├── services/                 # responsável as chamadas de API aos serviços
├── shared/                   # responsável por agrupar os micro frontend externos
├── bootstrap.tsx
└── index.tsx
```

#### Estrutura para páginas

Cada página possui seu proprio diretório, é nomeada utiliza o padrão de *CamelCase*.

```shell
src/pages/
├── Login/
│   ├── index.ts                # responsável por exportar o componente da página
│   ├── LoginPage.styles.ts     # responsável por criar a estilização da página
│   └── LoginPage.tsx           # responsável por criar a estrutura do componente
└── NotFound/
```

#### Estrutura para componentes
Cada componente possui seu proprio diretório, é nomeada utiliza o padrão de *CamelCase*.

```shell
src/components/
├── FormSignIn/
│   ├── index.ts                  # responsável por exportar o componente
│   ├── FormSignIn.styles.ts      # responsável por criar a estilização da página
│   └── FormSignIn.tsx            # responsável por criar a estrutura do componente
└── Logo/
```

#### Estrutura para Micro Frontend

Cada componente possui seu proprio diretório, é nomeada o nome do módulo federado.

```shell
src/shared/
├── utfpr-admit-mfe/
│   ├── AdmitRoutes.tsx           # responsável por carregar o mfe usando o nome do módulo federado
│   └── utfpr-admit-mfe.d.ts      # responsável por criar a tipagem estática do módulo
├── utfpr-core-shared-mfe/
├── utfpr-solicitation-mfe/
├── utfpr-profile-mfe/
└── utfpr-visitor-mfe/
```

## Registrar Micro Frontend


### Criar um novo repositório

Para criar um novo Micro Frontend é necessário criar um novo repositório. Para iniciar o processo podemos fazer o clone do projeto [utfpr-boilerplate-mfe](https://gitlab.com/utfprfabricadesoftware/utfpr-boilerplate-mfe). Ao fazer a copia da estrutura inicial precisamos configurar o processo de build e deploy do módulo federado em uma *cdn*.


### Registrar novo módulo

Para registar um novo módulo precisamos de algumas etapas:

#### Configurar uma nova entrada
Adicionar uma nova entrada do módulo na diretório **tools/appsEntry.ts**;

```javascript
const appsEntry = {
  // ...
  admitMFE: {
    enabled: true,
    localName: 'utfpr-admit-mfe',
    remoteName: 'utfpr_admit_mfe',
    url: `https://utfpr-admit-mfe.netlify.app/remoteEntry.js`,
  },

  // ADICIONAR NOVA ENTRADA
  appNameMFE: {
    enabled: true,
    localName: 'utfpr-app-name-mfe',
    remoteName: 'utfpr_app_name_mfe',
    url: 'http://localhost:4422/remoteEntry.js',
  },
}
```


#### Adicionar diretório para módulo
Adicionar novo diretório para o módulo **src/shared/utfpr-app-name-mfe**;

```javascript
// AppNameRoutes.tsx
import React from 'react'

import { APP_NAME } from 'constants/routes'
const AppNameRoutesLazy = React.lazy(() => import('utfpr-app-name-mfe/AppNameRoutes'))

type AppNameRoutesProps = {
  path?: string
}

function AppNameRoutes ({ path = APP_NAME }: AppNameRoutesProps)  {
  return <AppNameRoutesLazy basename={path} />
}

export default AppNameRoutes
```

#### Rota de acesso ao módulo
Adicionar qual a rota vai utilizar o mfe **src/app/RoutesMap.ts**;

```javascript
// RoutesMap.ts
import { APP_NAME } from 'constants/routes'

const AppNameRoutesLazy = React.lazy(() => import('shared/utfpr-app-name-mfe/AppNameRoutes'))

export const getRoutesMap = (): RouteProps[] => {
  return [
    // ..
    {
      path: ADMIT,
      component: AdmitRoutesLazy,
    },
    {
      path: APP_NAME,
      component: AppNameRoutesLazy,
    },
  ]
}
```