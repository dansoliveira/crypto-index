# Crypto Index API
Esta é a API do Crypto Index.

## Características

Para efetuar o login, o e-mail deve ser válido e a senha deve ter 6 dítigos.

Todas as rotas contém o prefixo `/api`.

Todo acesso a um endpoint inexistente recebe uma resposta com código `404` e o seguinte corpo:
```json
{
  "message": "Endpoint não encontrado"
}
```

Todo acesso não autorizado a um endpoint que precise de autenticação terá uma resposta com o código `401` e o seguinte corpo:
```json
{
  "message": "Token inválido"
}
```

## Primeiros passos
Instale as dependências rodando o comando `yarn` na raiz do projeto.

Faça uma cópia do arquivo `.env.example` renomeando para `.env`
```bash
cp .env.example .env
```

Troque as informações dentro do arquivo para as seguintes:
```
BITCOIN_API_URL=https://api.coindesk.com/v1/bpi
PORT=3333
```
> Observação: utilizamos a API da coindesk, e todo o restante da API foi desenvolvida para lidar com essas informações. Caso queira utilizar uma outra API, faça os ajustes necessários nas chamadas que consomem este endpoint.

Inicie o servidor
```
yarn dev:server
```

## Endpoints

### `POST /api/login`

**Body**

```json
{
  "email": "mail@provider.com",
  "password": "123456"
}
```

**Responses**
```json
// 200 OK
{
  "token": "bb000ef9680d2811"
}

// 400 Bad Request
{
  "message": "Campos inválidos"
}
```

---

### `GET /api/crypto/btc`

**Headers**

`authorization: <token>`

**Responses**
```json
// 200 OK
{
  "time": {
    "updated": "Dec 13, 2020 04:26:00 UTC",
    "updatedISO": "2020-12-13T04:26:00+00:00",
    "updateduk": "Dec 13, 2020 at 04:26 GMT"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "bpi": {
    "USD": {
      "code": "USD",
      "rate": "18,834.4200",
      "description": "United States Dollar",
      "rate_float": 18834.42
    },
    "BTC": {
      "code": "BTC",
      "rate": "1.0000",
      "description": "Bitcoin",
      "rate_float": 1
    },
    "BRL": {
      "code": "BRL",
      "rate": "101,705.868",
      "description": "Brazilian Real",
      "rate_float": 101705.868
    },
    "EUR": {
      "code": "EUR",
      "rate": "17,327.6664",
      "description": "Euro",
      "rate_float": 17327.6664
    },
    "CAD": {
      "code": "CAD",
      "rate": "27,121.5648",
      "description": "Canadian Dollar",
      "rate_float": 27121.5648
    }
  }
}
```

---

### `POST /api/crypto/btc`

**Headers**

`authorization: <token>`

**Body**

```json
{
  "currency": "BRL",
  "value": 10000.0
}
```

**Responses**
```json
// 200 OK
{
  "message": "Valor alterado com sucesso!"
}

// 400 Bad Request
{
  "message": "Moeda inválida"
}

// 400 Bad Request
{
  "message": "Valor inválido"
}
```
---

### `GET /api/currencies`

**Headers**

`authorization: <token>`

**Responses**
```json
// 200 OK
{
  "BRL": "5.400",
  "EUR": "0.920",
  "CAD": "1.440"
}
```
