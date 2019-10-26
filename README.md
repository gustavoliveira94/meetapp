# MeetApp

App agregador de eventos para desenvolvedores desenvolvido como projeto final do Bootcamp GoStack

## Inicialização

### Backend

Criar banco de dados postgres:
```
docker run --name meetapp -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Iniciar banco postgres:
```
docker start meetapp
```
Criar arquivo **.env** de acordo com o arquivo **.env.example**

Migrar tabelas para postgres:
```
**yarn sequelize db:migrate
```
Instalar dependências:
```
yarn install
```
Rodar projeto:
```
yarn dev
```
Rodar fila:
```
yarn queue
```

### Frontend

Instalar dependências:
```
yarn install
```
Rodar projeto:
```
yarn start
```

### Mobile - Testado somente no Android

#### Android

Instalar dependências:
```
yarn install
```
Rodar projeto:
```
react-native run-android
```

#### IOS

Instalar dependências:
```
yarn
```
Dentro da pasta ios para instalar dependências:
```
pod install
```
Rodar projeto:
```
react-native run-ios